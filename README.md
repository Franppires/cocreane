<div align="center">
<img width="1200" height="475" alt="Cocreane Banner" src="https://picsum.photos/seed/cocreane/1200/475" />
</div>

# Cocreane - Soluções Digitais Modernas

Um website moderno e responsivo para Cocreane, empresa especializada em soluções web e mobile.

## 🚀 Características

- **Design Moderno**: Interface visual contemporânea com gradientes e efeitos glassmorphism
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Performance**: Otimizado para velocidade e SEO
- **Componentes Reutilizáveis**: Arquitetura limpa e escalável
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **Formulário de Contato**: Página de contato completa e funcional

## 🛠️ Tecnologias

- **React 19** - Framework principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Vite** - Build tool e dev server
- **React Router DOM** - Navegação entre páginas

## 📋 Pré-requisitos

- Node.js (versão 16+)
- npm ou yarn

## 🚀 Executar Localmente

1. Clone ou baixe o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Preview da build de produção

## 📁 Estrutura do Projeto

```
cocreane/
├── components/          # Componentes reutilizáveis
│   ├── AnimatedSection.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── ServiceCard.tsx
│   ├── StatItem.tsx
│   ├── TestimonialCard.tsx
│   └── FloatingWhatsAppButton.tsx
├── pages/              # Páginas da aplicação
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── styles.css          # Estilos globais e animações
├── App.tsx            # Componente raiz
├── index.tsx          # Entry point
└── types.ts           # Tipos TypeScript
```

## 🎨 Customização

### Cores da Marca
Edite o arquivo `index.html` na seção tailwind.config:
```javascript
colors: {
  'brand-primary': '#0D0D2B',
  'brand-secondary': '#25254B',
  'brand-accent': '#3671E9',
  'brand-light': '#F2F2F2',
  'brand-gray': '#BDBDBD',
}
```

### Fontes
As fontes estão carregadas via Google Fonts (Inter). Edite em `index.html`.

## 📞 Contato

- **Email**: contato.cocreane@gmail.com
- **WhatsApp**: +55 14 99809-8786

## 📄 Licença

Este projeto é propriedade da Cocreane. Todos os direitos reservados.
