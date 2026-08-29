import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/profile';
import AskRepo from './AskRepo';

const statusColor = {
  LIVE: 'text-accent border-accent/40',
  BUILDING: 'text-amber border-amber/40',
};

const Projects = () => (
  <div className="space-y-3">
    {projects.map((p) => (
      <div key={p.id} className="border border-line bg-card px-4 py-4">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="font-semibold">{p.name}</span>
          {p.version && <span className="font-mono text-[10px] text-dim">{p.version}</span>}
          <span className={`font-mono text-[10px] border px-1.5 py-0.5 ${statusColor[p.status]}`}>
            {p.status}
          </span>
          <span className="flex-1" />
          {p.links.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-0.5 font-mono text-xs text-muted hover:text-accent transition-colors"
            >
              {l.label} <ArrowUpRight size={11} />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted mt-2">{p.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {p.tech.map((t) => (
            <span key={t} className="font-mono text-[10px] text-muted border border-line px-1.5 py-0.5">
              {t}
            </span>
          ))}
        </div>
        <AskRepo
          repo={p.repo}
          contextHint={`The visitor is asking about this personal project of Himanshu's (${p.repo}).`}
        />
      </div>
    ))}
  </div>
);

export default Projects;
