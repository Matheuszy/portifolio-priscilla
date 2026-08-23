import { motion } from 'framer-motion';
import { data } from '../data/content';

export default function PricingSection() {
  return (
    <section className="bg-brand-cream text-brand-dark py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand-burgundy"
        >
          Nossos Protocolos de Execução
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {data.pricing.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl flex flex-col justify-between h-full ${
                index === 2 
                ? 'bg-brand-burgundy text-white shadow-2xl md:scale-110 relative z-10 border-2 border-brand-gold' 
                : 'bg-white text-brand-dark shadow-xl'
              }`}
            >
              <div>
                <div className="flex text-brand-gold mb-4 text-xl">
                  {[...Array(plan.stars)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <h3 className={`text-2xl font-bold mb-4 uppercase ${index === 2 ? 'text-white' : 'text-brand-burgundy'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-8 ${index === 2 ? 'text-brand-cream' : 'text-gray-600'}`}>
                  {plan.desc}
                </p>
              </div>
              <div className="mt-auto pt-8 border-t border-gray-200/20">
                <p className={`text-3xl font-bold ${index === 2 ? 'text-brand-blue' : 'text-brand-dark'}`}>
                  {plan.price}<span className="text-sm font-normal">/mês</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}