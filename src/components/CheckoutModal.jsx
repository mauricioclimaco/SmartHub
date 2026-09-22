import React from 'react';
import formatCurrency from '../utils/formatCurrency';

export default function CheckoutModal({ isOpen, onClose, items, onConfirm }) {
  if (!isOpen) return null;

  const totalPrice = items.reduce((acc, item) => item.price + acc, 0);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Finalizar Pedido</h2>
        <p className="text-sm text-gray-500 mb-4">
          Confira o resumo da sua encomenda antes de confirmar:
        </p>

        {/* Resumo da lista */}
        <div className="max-h-48 overflow-y-auto divide-y divide-gray-100 mb-4 pr-1">
          {items.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="flex justify-between py-2 text-sm">
              <span className="text-gray-700">{item.title}</span>
              <span className="font-semibold text-gray-900">{formatCurrency(item.price)}</span>
            </div>
          ))}
        </div>

        {/* Totalizador */}
        <div className="border-t border-gray-200 pt-3 flex justify-between items-center mb-6">
          <span className="font-medium text-gray-700">Total a pagar:</span>
          <span className="text-2xl font-bold text-blue-600">{formatCurrency(totalPrice)}</span>
        </div>

        {/* Ações */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 py-3 px-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition cursor-pointer"
          >
            Confirmar Compra
          </button>
        </div>
      </div>
    </div>
  );
}