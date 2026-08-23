import { motion } from 'framer-motion';
import { data } from '../data/content';

export default function AboutSection() {
  return (
    <section className="bg-brand-burgundy text-brand-cream py-24 px-6 md:px-12 lg:px-24">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center md:text-left"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          {data.about.title}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 text-brand-blue">
          O custo de "apenas postar" é alto demais.
        </p>
        <div className="bg-brand-dark p-8 md:p-10 rounded-2xl shadow-2xl relative text-left">
          <div className="absolute -top-4 -left-4 text-brand-blue text-6xl">✦</div>
          <h2 className="text-2xl font-bold mb-4 text-white">Sobre Mim</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {data.about.description}
          </p>
          <p className="mt-6 font-bold uppercase tracking-widest text-brand-blue text-sm">
            {data.about.role}
          </p>
        </div>
      </motion.div>
    </section>
  );
}