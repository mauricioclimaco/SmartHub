📱 SmartHub - E-commerce de Smartphones

Uma aplicação moderna de catálogo de produtos com carrossel responsivo e carrinho de compras interativo, desenvolvida com React, Vite e estilizada com Tailwind CSS.

🚀 Funcionalidades

Carrossel Interativo de Produtos: Exibição fluida e responsiva de produtos com suporte para navegação por toque e botões laterais (alimentado por react-slick).

Carrinho de Compras Deslizante: Gaveta lateral animada (drawer) que permite visualizar itens selecionados em tempo real.

Gestão de Estado em React:

Adição e remoção dinâmica de produtos.

Indicador numérico animado no cabeçalho (badge com contagem).

Cálculo automático de subtotais e valor total da encomenda.

Formatação Monetária: Exibição de valores no padrão brasileiro (R$ 0,00) através de utilitário dedicado (Intl.NumberFormat).

Modal de Checkout: Ecrã de confirmação e resumo da compra com opções de revisão e conclusão do pedido.

Design Totalmente Responsivo: Layout adaptável para ecrãs móveis, tablets e monitores desktop com Tailwind CSS.

🛠️ Tecnologias Utilizadas

React: Biblioteca JavaScript para construção de interfaces reativas.

Vite: Ferramenta de build rápida e moderna para o ecossistema frontend.

Tailwind CSS: Framework utilitário de CSS para estilização rápida e responsiva.

React Slick: Componente de slider/carrossel baseado no Slick Carousel.

React Icons: Pacote abrangente de ícones populares para React.

📂 Estrutura do Projeto

SmartHub/
├── public/                # Imagens e ficheiros estáticos locais
│   ├── foto1.jpg
│   ├── foto2.png
│   └── ...
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Cart.jsx
│   │   └── CheckoutModal.jsx
│   ├── utils/             # Funções utilitárias
│   │   └── formatCurrency.js
│   ├── App.jsx            # Componente raiz da aplicação
│   ├── index.css          # Diretivas do Tailwind e estilos globais
│   └── main.jsx           # Ponto de entrada do React
├── package.json           # Dependências e scripts do projeto
├── tailwind.config.js     # Configuração do Tailwind CSS
└── vite.config.js         # Configuração do Vite


💻 Como Executar Localmente

Pré-requisitos

Node.js instalado na máquina (versão 18 ou superior recomendada).

Git instalado.

Passo a passo

Clonar o repositório:

git clone https://github.com/mauricioclimaco/SmartHub.git


Aceder à pasta do projeto:

cd SmartHub


Instalar as dependências:

npm install


Iniciar o servidor de desenvolvimento:

npm run dev


Abrir no navegador:
Aceda ao endereço http://localhost:5173/ exibido no terminal.

👤 Autor

Desenvolvido por Mauricio Climaco.

GitHub: @mauricioclimaco

E-mail: mauricioclimacos@gmail.com