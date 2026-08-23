import { motion } from 'framer-motion';
import { data } from '../data/content';

export default function DifferentialsSection() {
  return (
    <section className="bg-brand-dark text-brand-cream py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Nossos Diferenciais
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.differentials.map((diff, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#3A3A3A] p-8 rounded-2xl hover:bg-brand-burgundy transition-colors duration-300"
            >
              <div className="text-brand-blue text-4xl mb-6">✦</div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide text-white">{diff.title}</h3>
              <p className="text-gray-300">{diff.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}