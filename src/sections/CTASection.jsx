import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function CTASection() {
  return (
    <section className="bg-brand-dark text-white py-24 px-6 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-brand-burgundy rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Quem não vive para servir não serve para viver <br/>
          <span className="text-brand-blue">não é lembrado.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-12"
        >
          O esforço zero que o seu negócio precisa para escalar. Pare de perder vendas por um posicionamento confuso. Assuma o controle da percepção do seu cliente hoje.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="#" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white py-4 px-8 rounded-full font-bold transition-transform hover:scale-105 shadow-lg">
            <MessageCircle size={24} />
            Agendar Diagnóstico
          </a>
          <a href="#" className="flex items-center justify-center gap-2 bg-[#E1306C] hover:bg-[#C13584] text-white py-4 px-8 rounded-full font-bold transition-transform hover:scale-105 shadow-lg">
            <FaInstagram size={24} />
            Instagram
          </a>
          <a href="#" className="flex items-center justify-center gap-2 bg-[#0077B5] hover:bg-[#005582] text-white py-4 px-8 rounded-full font-bold transition-transform hover:scale-105 shadow-lg">
            <FaLinkedin size={24} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}