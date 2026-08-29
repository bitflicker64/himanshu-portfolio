import { useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

// Small "ask this repo" terminal box. Talks to /api/deepwiki (Vercel serverless proxy).
const scrub = (text) =>
  text
    .split('View this search')[0]
    .split('Wiki pages you might want to explore:')[0]
    .split('## Notes')[0]
    .replace(/<cite[^>]*\/>/g, '')
    .replace(/DeepWiki/g, 'the neural net')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#*`]/g, '')
    .trim();

const AskRepo = ({ repo, contextHint }) => {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('idle'); // idle | working | done | error
  const [statusLine, setStatusLine] = useState('');
  const [answer, setAnswer] = useState('');
  const abortRef = useRef(false);

  const ask = async (e) => {
    e.preventDefault();
    const q = input.trim();
    if (!q || status === 'working') return;
    setStatus('working');
    setAnswer('');
    setStatusLine('connecting to repo brain…');
    abortRef.current = false;

    try {
      const question = `You are answering a visitor on Himanshu Verma's (github: bitflicker64) portfolio. ${contextHint || ''} Answer conversationally in at most 4 short sentences, plain text only, no markdown, no citations.\n\nQuestion: ${q}`;
      const startRes = await fetch('/api/deepwiki', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repoName: repo, question, mode: 'fast' }),
      });
      if (!startRes.ok) throw new Error(`proxy ${startRes.status}`);
      const { job_id } = await startRes.json();
      if (!job_id) throw new Error('no job id');

      setStatusLine('analyzing repository… (can take up to a minute)');
      const deadline = Date.now() + 120_000;
      while (Date.now() < deadline) {
        await new Promise((r) => setTimeout(r, 4000));
        if (abortRef.current) return;
        const pollRes = await fetch(`/api/deepwiki?job_id=${encodeURIComponent(job_id)}`);
        if (!pollRes.ok) continue;
        const data = await pollRes.json();
        if (data.status === 'done') {
          setAnswer(scrub(data.text || '') || 'No answer came back. Try rephrasing?');
          setStatus('done');
          return;
        }
      }
      throw new Error('timeout');
    } catch {
      setStatus('error');
      setAnswer('Could not reach the repo brain right now — try again in a bit, or just open the repo on GitHub.');
    }
  };

  return (
    <div className="mt-4 border border-line bg-panel font-mono text-xs">
      <form onSubmit={ask} className="flex items-center gap-2 px-3 py-2">
        <Sparkles size={12} className="text-accent shrink-0" />
        <span className="text-accent select-none">$</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`ask this repo anything — e.g. "what did himanshu fix here?"`}
          className="w-full bg-transparent outline-none placeholder:text-dim text-fg"
          spellCheck={false}
        />
        {status === 'working'
          ? <span className="text-dim shrink-0 cursor-blink">▊</span>
          : <button type="submit" className="text-dim hover:text-accent shrink-0 transition-colors">↵</button>}
      </form>
      {status === 'working' && (
        <div className="px-3 pb-2 text-dim">{statusLine}</div>
      )}
      {(status === 'done' || status === 'error') && answer && (
        <div className="px-3 pb-3 pt-1 border-t border-line-soft text-muted leading-relaxed whitespace-pre-wrap">
          {answer}
        </div>
      )}
    </div>
  );
};

export default AskRepo;
