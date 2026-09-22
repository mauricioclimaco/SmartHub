import React from 'react';
import { BsCartDash } from 'react-icons/bs';
import formatCurrency from '../utils/formatCurrency';

export default function Cart({ isVisible, onClose, items, onRemoveItem, onCheckout }) {
  const totalPrice = items.reduce((acc, item) => item.price + acc, 0);

  return (
    <section
      className={`fixed top-0 right-0 w-full max-w-[360px] h-screen bg-white shadow-2xl z-50 p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div>
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Carrinho de Compras</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 font-bold text-xl cursor-pointer p-1"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-230px)] mt-4 divide-y divide-gray-100 pr-1">
          {items.length === 0 ? (
            <p className="text-gray-400 text-center py-10">O carrinho está vazio.</p>
          ) : (
            items.map((item, index) => (
              <div key={`${item.id}-${index}`} className="relative flex items-center gap-3 py-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain rounded border border-gray-100 p-1"
                />
                <div className="flex-1 pr-6">
                  <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm font-bold text-blue-600 mt-1">
                    {formatCurrency(item.price)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onRemoveItem(index)}
                  className="text-red-500 hover:text-red-700 text-xl cursor-pointer p-1"
                  title="Remover item"
                >
                  <BsCartDash />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 font-medium">Subtotal:</span>
          <span className="text-2xl font-bold text-gray-900">
            {formatCurrency(totalPrice)}
          </span>
        </div>
        <button
          type="button"
          disabled={items.length === 0}
          onClick={onCheckout}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-semibold py-3 rounded-lg shadow transition-colors cursor-pointer disabled:cursor-not-allowed"
        >
          Finalizar Compra
        </button>
      </div>
    </section>
  );
}