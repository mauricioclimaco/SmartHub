# 📱 SmartHub - E-commerce de Smartphones

Uma aplicação moderna de catálogo de produtos com carrossel responsivo e carrinho de compras interativo, desenvolvida com **React**, **Vite** e estilizada com **Tailwind CSS**.

---

## 🚀 Funcionalidades

- **Carrossel Interativo de Produtos:** Exibição fluida e responsiva com suporte para navegação por toque e botões laterais (alimentado por `react-slick`).
- **Carrinho de Compras Lateral (*Drawer*):** Gaveta lateral animada que desliza na tela exibindo os itens adicionados em tempo real.
- **Gestão de Estado em React:**
  - Adição e remoção dinâmica de produtos.
  - Indicador numérico animado no cabeçalho (*badge* com contagem de itens).
  - Cálculo automático de subtotais e valor total da encomenda.
- **Formatação de Moeda:** Exibição dos valores formatados no padrão brasileiro (`R$ 0,00`).
- **Modal de Checkout:** Janela de confirmação com o resumo dos itens antes de finalizar a compra.
- **Design Responsivo:** Adaptado para telemóveis, tablets e monitores desktop com Tailwind CSS.

---

## 🛠️ Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção da interface.
- **Vite:** Ferramenta de build rápida para o ambiente de desenvolvimento.
- **Tailwind CSS:** Framework utilitário para estilização e responsividade.
- **React Slick / Slick Carousel:** Biblioteca para construção do carrossel/slider.
- **React Icons:** Conjunto de ícones para botões e ações.

---

## 📂 Estrutura do Projeto

```text
SmartHub/
├── public/
│   ├── foto1.jpg
│   ├── foto2.png
│   ├── foto3.jpg
│   ├── foto4.jpg
│   └── foto5.jpg
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   └── CheckoutModal.jsx
│   ├── utils/
│   │   └── formatCurrency.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 💻 Como Executar Localmente

### Pré-requisitos

* [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).
* Git instalado.

### Passo a Passo

1. **Clonar o repositório:**
```bash
git clone https://github.com/mauricioclimaco/SmartHub.git
```

2. **Aceder à pasta do projeto:**
```bash
cd SmartHub
```

3. **Instalar as dependências:**
```bash
npm install
```

4. **Iniciar o servidor de desenvolvimento:**
```bash
npm run dev
```

5. **Abrir no navegador:**  
Aceda ao endereço `http://localhost:5173/` exibido no terminal.

---

## 👤 Autor

Desenvolvido por **Mauricio Climaco**.

* **GitHub:** [@mauricioclimaco](https://github.com/mauricioclimaco)
* **E-mail:** [mauricioclimacos@gmail.com](mailto:mauricioclimacos@gmail.com)