import { motion } from 'framer-motion';
import { data } from '../data/content';

export default function WorkflowSection() {
  return (
    <section className="bg-brand-burgundy text-brand-cream py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Fluxograma de Trabalho
        </motion.h2>
        
        <div className="flex flex-col md:flex-row justify-between items-start relative">
          {/* Linha conectora visível apenas no desktop */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-1 bg-brand-blue/30 -z-10" />
          
          {data.workflow.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center w-full md:w-1/5 mb-8 md:mb-0 px-2"
            >
              <div className="w-12 h-12 rounded-full bg-brand-blue text-brand-dark font-bold flex items-center justify-center text-xl mb-6 shadow-[0_0_15px_rgba(127,177,255,0.5)]">
                {item.step}
              </div>
              <h3 className="text-lg font-bold uppercase mb-2">{item.title}</h3>
              <p className="text-sm opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}