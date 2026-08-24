import { motion } from 'framer-motion';
import { data } from '../data/content';

export default function SkillsSection() {
  const groups = [
    { label: 'Hard Skills', items: data.skills.hard },
    { label: 'Soft Skills', items: data.skills.soft },
  ];

  return (
    <section className="bg-brand-cream text-brand-dark py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {groups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: gi * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-burgundy mb-8">
              {group.label}
            </h2>
            <ul className="space-y-6">
              {group.items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-brand-burgundy mt-1">●</span>
                  <p className="text-lg leading-relaxed">
                    <strong>{item.title}:</strong>{' '}
                    <span className="opacity-80">{item.desc}</span>
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}