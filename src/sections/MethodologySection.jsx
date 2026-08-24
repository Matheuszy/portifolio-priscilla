import { motion } from 'framer-motion';
import { data } from '../data/content';

export default function MethodologySection() {
  return (
    <section className="bg-brand-dark text-brand-cream py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto space-y-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-brand-blue border border-brand-blue rounded-full px-4 py-1 mb-8">
            Branding Estratégico
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg leading-relaxed">
            <p className="opacity-90">{data.methodology.branding.left}</p>
            <p className="text-brand-blue font-medium">{data.methodology.branding.right}</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} viewport={{ once: true }}>
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-brand-blue border border-brand-blue rounded-full px-4 py-1 mb-8">
            Por Trás das Câmeras
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {data.methodology.secrets.map((secret, i) => (
              <div key={i}>
                <h3 className="font-bold text-brand-blue mb-2">{secret.title}</h3>
                <p className="opacity-80 leading-relaxed">{secret.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}