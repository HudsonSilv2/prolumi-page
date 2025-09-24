 # Projeto Prolumi - Página de Apresentação

 ## Descrição

 Este projeto foi desenvolvido como trabalho para uma apresentação do ensino médio. A proposta foi criar uma empresa fictícia que atenda às necessidades da cidade; escolhi o setor de iluminação por sua relação com segurança, conforto e estética urbana.

 ## Objetivo

- Construir uma landing page informativa e visualmente agradável para uma empresa de iluminação.
- Demonstrar conceitos de layout responsivo, interação e apresentação de parceiros e projetos.

 ## O que foi implementado

- Estrutura com React + Vite + TypeScript.
- Estilização com Tailwind CSS e variáveis CSS para palette personalizada.
- Componentes principais: header, menu mobile, carrossel de imagens, seção de parceiros, projetos e formulário de contato.
- Integração opcional com visualização 3D (Spline) carregada sob demanda para melhor performance.
- Ajustes de acessibilidade básicos (aria-labels, indicadores, botões com foco).

 ## Como rodar

 Requisitos:

- Node.js 18+ e npm

 Passos:

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

 ## Observações

- A visualização 3D usa `@splinetool/react-spline` e é carregada apenas quando necessário para evitar custos de performance em dispositivos menores.
- Caso queira alterar a paleta, edite `src/index.css` e `tailwind.config.js`.

 ## Créditos

 Projeto criado por HudsonSilv2 (projeto de apresentação escolar). Texto e layout adaptados e melhorados para apresentação.

 ---