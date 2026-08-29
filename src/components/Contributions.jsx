import { useEffect, useState } from 'react';
import { profile } from '../data/profile';

// GitHub contributions heatmap via the public jogruber API.
const LEVELS = ['#17151f', '#2e2650', '#4c3d8a', '#7359c8', '#a78bfa'];

const Contributions = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${profile.handle}?y=last`)
      .then((r) => (r.ok ? r.json() : null))
      .then(setData)
      .catch(() => setData(null));
  }, []);

  if (!data?.contributions?.length) {
    // skeleton matching the heatmap's shape
    return (
      <div aria-label="Loading contribution graph">
        <div className="flex items-baseline justify-between mb-3 font-mono text-xs">
          <span className="text-dim tracking-widest">GITHUB CONTRIBUTIONS</span>
          <span className="w-24 h-3 bg-card animate-pulse" />
        </div>
        <div className="flex gap-[3px]">
          {Array.from({ length: 40 }, (_, i) => (
            <div key={i} className="flex flex-col gap-[3px]">
              {Array.from({ length: 7 }, (_, j) => (
                <div key={j} className="w-[9px] h-[9px] bg-card animate-pulse" />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const days = data.contributions;
  const total = data.total?.lastYear ?? days.reduce((a, d) => a + d.count, 0);

  // group into weeks (columns)
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));

  return (
    <div>
      <div className="flex items-baseline justify-between mb-3 font-mono text-xs">
        <span className="text-dim tracking-widest">GITHUB CONTRIBUTIONS</span>
        <span className="text-accent">{total.toLocaleString()} in the last year</span>
      </div>
      <div className="overflow-x-auto custom-scrollbar pb-1">
        <div className="flex gap-[3px] min-w-max">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((day) => (
                <div
                  key={day.date}
                  title={`${day.date}: ${day.count} contributions`}
                  className="w-[9px] h-[9px]"
                  style={{ background: LEVELS[day.level] ?? LEVELS[0] }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-1.5 mt-2 font-mono text-[10px] text-dim">
        Less
        {LEVELS.map((c) => (
          <span key={c} className="w-[9px] h-[9px] inline-block" style={{ background: c }} />
        ))}
        More
      </div>
    </div>
  );
};

export default Contributions;
