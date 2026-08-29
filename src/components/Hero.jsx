import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, BookOpen } from 'lucide-react';
import { GithubIcon, XIcon, LinkedinIcon } from './BrandIcons';
import { profile } from '../data/profile';

const Clock = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="font-mono text-xs text-dim tabular-nums">
      {now.toLocaleTimeString('en-GB')}
    </span>
  );
};

const SocialBtn = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target={href.startsWith('mailto') ? undefined : '_blank'}
    rel="noreferrer"
    className="press flex items-center gap-2 border border-line bg-card px-3 py-1.5 font-mono text-xs text-muted hover:text-fg hover:border-accent/50 transition-colors"
  >
    <Icon size={13} /> {label}
  </a>
);

const Hero = () => (
  <header className="relative px-5 sm:px-8 pt-10 pb-10">
    {/* ambient glow behind the hero */}
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-80 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(139,92,246,0.16), transparent 65%)' }}
    />
    {/* banner strip with clock */}
    <div className="crosshatch border border-line h-20 mb-[-28px] relative">
      <div className="absolute bottom-2 right-3"><Clock /></div>
      <div className="absolute top-2 left-3 font-mono text-[10px] tracking-[0.3em] text-dim">
        HV://ROOT
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={profile.avatar}
        alt={profile.name}
        className="w-16 h-16 border border-line bg-card object-cover relative z-10 ml-4"
      />
      <div className="mt-4 flex items-baseline gap-3 flex-wrap">
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tighter leading-none">{profile.name}</h1>
        <span className="font-mono text-sm text-dim">{profile.age}</span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-accent border border-accent/30 px-2 py-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> OPERATIONAL
        </span>
      </div>
      <p className="mt-3 text-muted">{profile.tagline}</p>
      <ul className="mt-3 space-y-1.5 text-sm text-muted">
        {profile.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="text-dim">•</span> <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        <SocialBtn href={profile.socials.github} icon={GithubIcon} label="GitHub" />
        <SocialBtn href={profile.socials.twitter} icon={XIcon} label="X" />
        <SocialBtn href={profile.socials.linkedin} icon={LinkedinIcon} label="LinkedIn" />
        <SocialBtn href={profile.socials.medium} icon={BookOpen} label="Medium" />
        <SocialBtn href={`mailto:${profile.email}`} icon={Mail} label="Email" />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {profile.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
            className="border border-line bg-card px-3 py-2.5"
          >
            <div className="font-mono text-lg text-accent tabular-nums">{s.value}</div>
            <div className="font-mono text-[10px] tracking-widest text-dim mt-0.5">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </header>
);

export default Hero;
