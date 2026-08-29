import crypto from 'crypto';

export default async function handler(req, res) {
  // Only allow specific methods
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    return res.status(200).end();
  }

  // Common headers for OMNI - this hides the Origin bypass from the frontend
  const OMNI_HEADERS = {
    'Origin': 'https://deepwiki.com',
    'Referer': 'https://deepwiki.com/',
    'Content-Type': 'application/json'
  };

  try {
    // Mode A: Start Job (POST)
    if (req.method === 'POST') {
      const { repoName, question, mode = 'deep' } = req.body;
      
      if (!repoName || !question) {
        return res.status(400).json({ error: 'Missing repoName or question' });
      }

      // Generate UUID required by OMNI (format: slug_uuid)
      // We use crypto.randomUUID() which is standard in Node 18+
      const queryId = `query_${crypto.randomUUID()}`;

      const payload = {
        query_id: queryId,
        mode: mode, // supports 'fast' or 'deep'
        repo_names: [repoName],
        source: "ada.deepwiki_public",
        user_query: question,
        additional_context: "<relevant_context>\nThis query was sent from the portfolio frontend.\n</relevant_context>",
        generate_summary: false,
        keywords: []
      };

      const devinRes = await fetch('https://api.devin.ai/ada/query', {
        method: 'POST',
        headers: OMNI_HEADERS,
        body: JSON.stringify(payload)
      });

      if (!devinRes.ok) {
        throw new Error(`OMNI API returned ${devinRes.status}`);
      }

      // Return immediately so Vercel doesn't timeout!
      return res.status(200).json({ job_id: queryId });
    }

    // Mode B: Poll Status (GET)
    if (req.method === 'GET') {
      const { job_id } = req.query;
      
      if (!job_id) {
        return res.status(400).json({ error: 'Missing job_id' });
      }

      const pollRes = await fetch(`https://api.devin.ai/ada/query/${job_id}`, {
        method: 'GET',
        headers: OMNI_HEADERS
      });

      if (!pollRes.ok) {
        if (pollRes.status === 404) {
             return res.status(404).json({ error: 'Job not found' });
        }
        throw new Error(`OMNI API returned ${pollRes.status}`);
      }

      const data = await pollRes.json();
      const latestQuery = data.queries?.[data.queries.length - 1];

      if (!latestQuery) {
        return res.status(200).json({ status: 'pending' });
      }

      if (latestQuery.state === 'done') {
        // Aggregate all text chunks
        let textResult = '';
        const chunks = latestQuery.response || [];
        for (const chunk of chunks) {
          // OMNI returns 'chunk' types for prose, and 'tool_call_*' for agent actions.
          // We only want the prose.
          if (chunk.type === 'chunk' && typeof chunk.data === 'string') {
            textResult += chunk.data;
          }
        }
        return res.status(200).json({ status: 'done', text: textResult });
      }

      // If state is not 'done', it's still processing
      return res.status(200).json({ status: 'pending' });
    }

    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('DeepWiki Proxy Error:', error);
    // Don't leak internal stacks
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
