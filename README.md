# Portfólio — Priscilla Pereira

Landing page de portfólio para consultora de Neuromarketing. Apresenta os serviços, diferenciais, fluxo de trabalho e pacotes de preços.

## Tecnologias

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animações
- [Lucide React](https://lucide.dev/) — ícones

## Estrutura

```
src/
├── sections/       # Seções da página (About, Strategy, Differentials, Workflow, Pricing, CTA)
├── components/     # Componentes reutilizáveis (Button, PricingCard)
├── data/
│   └── content.js  # Textos e dados do site centralizados
├── App.jsx
├── main.jsx
└── index.css
```

## Como rodar

```bash
npm install
npm run dev
```

## Scripts

| Comando         | Descrição                        |
|-----------------|----------------------------------|
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção         |
| `npm run preview` | Visualiza o build localmente   |
