import React, { useState } from 'react';
import SliderComponent from 'react-slick';
import { BsCart3, BsCartPlusFill } from 'react-icons/bs';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Cart from './components/Cart';
import CheckoutModal from './components/CheckoutModal';
import formatCurrency from './utils/formatCurrency';

const Slider = SliderComponent.default || SliderComponent;

const data = [
  { id: 1, title: 'iPhone 15 Pro', price: 7299.00, image: '/foto1.jpg' },
  { id: 2, title: 'Samsung S24 Ultra', price: 6899.00, image: '/foto2.png' },
  { id: 3, title: 'Google Pixel 8', price: 4999.00, image: '/foto3.jpg' },
  { id: 4, title: 'OnePlus 12', price: 4499.00, image: '/foto4.jpg' },
  { id: 5, title: 'Xiaomi 14', price: 4199.00, image: '/foto5.jpg' },
];

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setIsCartVisible(true);
  };

  const handleRemoveItem = (indexToRemove) => {
    setCartItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
  };

  const handleStartCheckout = () => {
    setIsCartVisible(false);
    setIsCheckoutOpen(true);
  };

  const handleConfirmOrder = () => {
    alert('🎉 Compra finalizada com sucesso! Obrigado pelo seu pedido.');
    setCartItems([]);
    setIsCheckoutOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-700 flex flex-col relative overflow-x-hidden">
      <header className="w-full bg-slate-800 text-white py-4 px-8 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold tracking-wide">SmartHub</h1>
        
        <button
          type="button"
          onClick={() => setIsCartVisible(!isCartVisible)}
          className="relative p-2 text-2xl hover:text-blue-400 transition-colors cursor-pointer"
        >
          <BsCart3 />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
              {cartItems.length}
            </span>
          )}
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-3/4 m-auto">
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-56 flex justify-center items-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-44 w-44 object-contain block m-auto"
                  />
                </div>

                <div className="bg-blue-600 p-4 flex justify-between items-center">
                  <div>
                    <p className="text-white font-semibold text-base">{item.title}</p>
                    <p className="text-blue-200 text-sm font-bold mt-0.5">
                      {formatCurrency(item.price)}
                    </p>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => handleAddToCart(item)}
                    className="bg-white text-blue-600 hover:bg-blue-50 p-2.5 rounded-full shadow-md transition-all cursor-pointer"
                    title="Adicionar ao carrinho"
                  >
                    <BsCartPlusFill className="text-lg" />
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </main>

      {/* Gaveta do Carrinho */}
      <Cart
        isVisible={isCartVisible}
        onClose={() => setIsCartVisible(false)}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleStartCheckout}
      />

      {/* Ecrã de Confirmação de Pedido */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onConfirm={handleConfirmOrder}
      />
    </div>
  );
}