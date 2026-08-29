import { useState } from 'react';
import { ChevronDown, GitMerge, Star } from 'lucide-react';
import { experience } from '../data/profile';
import AskRepo from './AskRepo';

const ExperienceCard = ({ exp, defaultOpen }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-line bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="font-semibold">{exp.org}</span>
            {exp.stars && (
              <span className="flex items-center gap-1 font-mono text-[10px] text-amber border border-amber/30 px-1.5 py-0.5">
                <Star size={9} /> {exp.stars}
              </span>
            )}
            <span className="flex items-center gap-1 font-mono text-[10px] text-accent border border-accent/30 px-1.5 py-0.5">
              <GitMerge size={9} /> {exp.prs}
            </span>
          </div>
          <div className="font-mono text-xs text-dim mt-1">{exp.role}</div>
        </div>
        <ChevronDown
          size={16}
          className={`text-dim shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="px-4 pb-4 border-t border-line-soft pt-3">
          {exp.summary && <p className="text-sm text-muted mb-4">{exp.summary}</p>}
          <ul className="space-y-3">
            {exp.highlights.map((h) => (
              <li key={h.title} className="text-sm">
                <a
                  href={h.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:text-accent transition-colors"
                >
                  {h.title}
                </a>
                <span className="font-mono text-[10px] text-dim ml-2">{h.refs}</span>
                <p className="text-muted mt-0.5">{h.text}</p>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {exp.tags.map((t) => (
              <span key={t} className="font-mono text-[10px] text-muted border border-line px-1.5 py-0.5">
                {t}
              </span>
            ))}
          </div>
          <AskRepo
            repo={exp.repo}
            contextHint={`The visitor is asking about bitflicker64's merged contributions to this repository (${exp.repo}).`}
          />
        </div>
      )}
    </div>
  );
};

const Experience = () => (
  <div className="space-y-3">
    {experience.map((exp, i) => (
      <ExperienceCard key={exp.id} exp={exp} defaultOpen={i === 0} />
    ))}
  </div>
);

export default Experience;
