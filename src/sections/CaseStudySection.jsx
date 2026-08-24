import { motion } from 'framer-motion';

export default function CaseStudySection() {
  return (
    <section className="bg-brand-cream text-brand-dark py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-brand-burgundy mb-2">
          Exemplos
        </motion.h2>
        <p className="text-sm uppercase tracking-widest opacity-60 mb-12">Fotos e artes visuais produzidas por mim</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {/* troque pelos caminhos reais das suas imagens */}
            <img src="/src/assets/case-fatima-1.jpg" alt="Post 1" className="rounded-2xl shadow-lg w-full h-full object-cover" />
            <img src="/src/assets/case-fatima-2.jpg" alt="Post 2" className="rounded-2xl shadow-lg w-full h-full object-cover" />
            <img src="/src/assets/case-fatima-3.jpg" alt="Post 3" className="rounded-2xl shadow-lg w-full h-full object-cover col-span-2" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4 text-brand-burgundy">Estratégia utilizada</h3>
            <p className="text-lg leading-relaxed opacity-90">
              Analisando o negócio da cliente, percebi que não havia pacotes personalizados que transmitissem sua personalidade. Criei esses menus de experiências e captei as fotos com um design alegre e intencional, atraindo a atenção do público-alvo, o que gerou engajamento espontâneo e interesse.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}