import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import Hero from './components/Hero';
import Section from './components/Section';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contributions from './components/Contributions';
import { profile, techStack, writing } from './data/profile';

const App = () => (
  <div className="min-h-screen flex justify-center">
    <main className="w-full max-w-2xl border-x border-line bg-panel rail">
      <Hero />

      <Section number="01" label="TOOLKIT">
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              className="font-mono text-xs text-muted border border-line bg-card px-2 py-1"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </Section>

      <Section number="02" label="PATH" title="Open Source Experience">
        <p className="text-sm text-muted -mt-4 mb-6 font-mono text-xs">
          46 merged upstream PRs across Apache & CNCF projects. Each card has a small
          terminal — ask it anything about the work.
        </p>
        <Experience />
      </Section>

      <Section number="03" label="WORK" title="Projects">
        <Projects />
      </Section>

      <Section number="04" label="ACTIVITY" title="Coding Activity">
        <Contributions />
      </Section>

      <Section number="05" label="WRITING" title="Writing">
        {writing.map((w) => (
          <a
            key={w.url}
            href={w.url}
            target="_blank"
            rel="noreferrer"
            className="block border border-line bg-card px-4 py-3 hover:border-accent/50 transition-colors"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-medium text-sm">{w.title}</span>
              <ArrowUpRight size={14} className="text-dim shrink-0" />
            </div>
            <p className="text-xs text-muted mt-1.5">{w.preview}</p>
            <div className="font-mono text-[10px] text-dim mt-2">{w.meta}</div>
          </a>
        ))}
      </Section>

      <Section number="06" label="CONTACT" title="Let's build systems.">
        <p className="text-sm text-muted mb-4">
          Open to internships, infrastructure work, and open source collaborations. Drop a line anytime.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="press inline-flex items-center gap-2 border border-accent/40 text-accent font-mono text-sm px-4 py-2 hover:bg-accent/10 transition-colors"
        >
          <Mail size={14} /> {profile.email}
        </a>
      </Section>

      <footer className="border-t border-line px-5 sm:px-8 py-6 flex items-center justify-between font-mono text-[10px] text-dim">
        <span>© {new Date().getFullYear()} HV_INFRA_SYS v2.0.0 · STATUS: OPERATIONAL</span>
        <span>0xHV_ROOT_SECURED</span>
      </footer>
    </main>
  </div>
);

export default App;
