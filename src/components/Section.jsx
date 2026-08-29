import { motion } from 'framer-motion';

const Section = ({ number, label, title, children, id }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5 }}
    className="border-t border-line px-5 sm:px-8 py-10"
  >
    <div className="font-mono text-[11px] tracking-[0.25em] text-dim mb-1">
      {number} — {label}
    </div>
    {title && <h2 className="font-display text-2xl font-bold tracking-tight mb-6">{title}</h2>}
    {children}
  </motion.section>
);

export default Section;
