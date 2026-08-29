# himanshu-portfolio

Personal portfolio of Himanshu Verma ([bitflicker64](https://github.com/bitflicker64)).

Single-page, dark violet, terminal-flavored. Sections: hero, toolkit, open source
experience, projects, GitHub activity, writing, contact. Every experience and project
card carries a small "ask this repo" box that answers questions about the work using
repository analysis behind a serverless proxy.

## Stack

- Vite + React
- Tailwind CSS v4
- Framer Motion
- Vercel (static build plus `api/` serverless functions)

## Develop

```bash
npm install
npm run dev
```

The ask-repo boxes call `/api/deepwiki`, which only exists on Vercel. Use `vercel dev`
to exercise them locally.

## Deploy

```bash
vercel --prod
```
