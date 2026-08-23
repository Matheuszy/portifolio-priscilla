import { motion } from 'framer-motion';

export default function PricingCard({ plan, isPremium, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`p-8 rounded-3xl flex flex-col justify-between h-full ${
        isPremium 
        ? 'bg-brand-burgundy text-white shadow-2xl md:scale-110 relative z-10 border-2 border-brand-gold' 
        : 'bg-white text-brand-dark shadow-xl'
      }`}
    >
      {/* Todo o miolo do cartão de preços entraria aqui... */}
    </motion.div>
  );
}