# Projeto Prolumi - Página de Apresentação

## Descrição

Este projeto foi desenvolvido como trabalho para uma apresentação do ensino médio. A proposta foi criar uma empresa fictícia que atenda às necessidades da cidade; escolhi o setor de iluminação por sua relação com segurança, conforto e estética urbana.

## Objetivo

- Construir uma landing page informativa e visualmente agradável para uma empresa de iluminação.
- Demonstrar conceitos de layout responsivo, interação e apresentação de parceiros e projetos.

## O que foi implementado

- Estrutura com React + Vite + TypeScript.
- Estilização com Tailwind CSS e variáveis CSS para paleta personalizada.
- Componentes reutilizáveis (DRY) com hooks customizados:
  - `useScrollThreshold` — transição do header ao rolar.
  - `useAutoPlay` — slideshow com pausa ao hover.
- Seções da página:
  - **Hero** com slideshow fullscreen + CTA + controles.
  - **Sobre** — serviços com ícones (lucide-react).
  - **Cards** — localização, experiência e busca de produtos.
  - **Parceiros** — imagem, descrição e logos.
  - **Projetos** — grid responsivo com hover zoom.
  - **Contato** — formulário com validação e feedback.
  - **3D** — visualização Spline carregada sob demanda.
  - **Footer** — informações de contato e navegação.
- Acessibilidade: `aria-label`, `aria-current`, foco visível, navegação por teclado.
- Performance: lazy loading de imagens, `loading="lazy"`, Spline dinâmico.

## Como rodar

### Requisitos

- Node.js 18+ e npm

### Passos

1. Instalar dependências

```bash
npm install
```

2. Rodar em modo desenvolvimento

```bash
npm run dev
```

3. Build de produção

```bash
npm run build
```

## Estrutura do projeto

```
src/
├── components/
│   ├── header.tsx          # Header fixo com navegação e menu mobile
│   ├── logo.tsx            # Logo do site
│   ├── HeroSlideShow.tsx   # Hero com slideshow, overlay e CTA
│   ├── About.tsx           # Seção "Sobre" com cards de serviços
│   ├── InfoCards.tsx       # Cards informativos
│   ├── Partners.tsx        # Seção de parceiros e logos
│   ├── Projects.tsx        # Grid de projetos realizados
│   ├── Contact.tsx         # Formulário de contato
│   ├── View3D.tsx          # Componente Spline 3D (lazy load)
│   └── Footer.tsx          # Rodapé com links e contatos
├── hooks/
│   └── index.ts            # Hooks customizados (scroll, autoplay)
├── assets/                 # Logos e imagens dos parceiros
├── images/                 # Imagens do slideshow e projetos
└── index.css               # Estilos globais + componentes Tailwind
```

## Observações

- A visualização 3D usa `@splinetool/react-spline` e é carregada apenas quando necessário para evitar custos de performance em dispositivos menores.
- Caso queira alterar a paleta, edite `src/index.css`.
- O formulário de contato usa simulação local — para produção, integre com um serviço como FormSpree, EmailJS ou backend próprio.
- As imagens usadas são placeholdery. Substitua por imagens reais do projeto.

---

## Changelog

### 2026-04-05 — Refatoração visual profissional

- **Paleta**: trocada de azul (#06b6d4 / #0b3d91) para verde (#10b981 / #064e3b) com nuances --primary, --primary-light, --primary-dark, --primary-50, --primary-100.
- **Logo**: substituída de src/assets/logo_lumi.png para /logo_1.png (arquivo em public/).
- **index.css**: paleta renovada, classes utilitárias redesenhadas com bordas, sombras e hover states polidos.
- **Header**: fundo adaptativo (transparente no hero, branco ao rolar).
- **HeroSlideShow**: badge animado, texto com destaque em verde, indicadores animados, setas com backdrop blur.
- **About**: cards com containers de ícone em fundo --primary-50.
- **Contact**: validação inline com mensagens de erro, substituição de SweetAlert por feedback nativo.
- **Partners**: layout em grid 2 colunas com CTA.
- **Projects**: zoom hover com scale-110, slide-in na seta.
- **View3D**: gradiente verde escuro com padrão de pontos, card com backdrop blur e ícone Box.
- **Footer**: logo no rodapé, ícones coloridos, borda superior sutil.
- **SweetAlert removido**: substituição por validação inline e feedback visual próprio.

## Créditos

Projeto criado por HudsonSilv2 (projeto de apresentação escolar). Texto e layout adaptados e melhorados para apresentação.
