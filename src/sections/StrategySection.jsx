import { motion } from 'framer-motion';

export default function StrategySection() {
  const formats = [
    { title: "Post Carrossel", desc: "Formato de autoridade e educação. Aprofundamos temas para o cliente salvar e consultar depois." },
    { title: "Reels", desc: "Rompemos a bolha. Ganchos nos 3 primeiros segundos para gerar uma 'venda invisível' e natural." },
    { title: "Thumb Estratégica", desc: "O 'outdoor' do seu vídeo. Capas que geram curiosidade imediata e salvam seu vídeo da invisibilidade." },
    { title: "Post Estático", desc: "Comunicação direta para humanizar sua marca e gerar conexão rápida." }
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-brand-cream text-brand-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-burgundy mb-6">Neuromarketing Estratégico</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-80">
            Utilizo gatilhos mentais para que o cérebro do seu cliente identifique sua solução como a única possível. Conversão simplificada com <strong>esforço zero</strong>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formats.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-burgundy hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-3 text-brand-burgundy">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}