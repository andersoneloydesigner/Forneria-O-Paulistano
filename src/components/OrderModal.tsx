import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPizza?: string;
}

export default function OrderModal({
  isOpen,
  onClose,
  preselectedPizza = '',
}: OrderModalProps) {
  const [selectedPizza, setSelectedPizza] = useState(preselectedPizza || 'Paulistana Clássica');
  const [orderType, setOrderType] = useState<'delivery' | 'retirada'>('delivery');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (preselectedPizza) {
      setSelectedPizza(preselectedPizza);
    }
  }, [preselectedPizza]);

  if (!isOpen) return null;

  const handleSendToWhatsApp = () => {
    const text = `Olá, Forneria O Paulistano! 🍕%0A%0A` +
      `Gostaria de fazer um pedido:%0A` +
      `*Pizza:* ${encodeURIComponent(selectedPizza)}%0A` +
      `*Tipo:* ${orderType === 'delivery' ? 'Entrega (Delivery)' : 'Retirada no Balcão'}%0A` +
      (address ? `*Endereço:* ${encodeURIComponent(address)}%0A` : '') +
      (notes ? `*Observações:* ${encodeURIComponent(notes)}%0A` : '') +
      `%0APoderiam me confirmar o tempo estimado? Muito obrigado!`;

    window.open(`https://wa.me/5548991897510?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#1e1e1e] text-[#f9f8ed] rounded-3xl border border-[#333333] w-full max-w-lg overflow-hidden shadow-2xl relative">
        
        {/* Header */}
        <div className="p-6 border-b border-[#2e2e2e] flex items-center justify-between">
          <div>
            <span className="font-size-body tracking-wider uppercase font-bold text-[#ff4d4d]">
              Forneria O Paulistano
            </span>
            <h3 className="font-title font-size-sub font-bold text-[#f9f8ed] mt-1 tracking-normal">
              Fazer Pedido via WhatsApp
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="p-2 rounded-full bg-[#2a2a2a] text-[#f9f8ed]/70 hover:text-white hover:bg-[#333333] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          
          {/* Pizza Selection */}
          <div>
            <label className="block font-size-body font-medium text-[#f9f8ed]/90 mb-2">
              Escolha seu sabor favorito:
            </label>
            <select
              value={selectedPizza}
              onChange={(e) => setSelectedPizza(e.target.value)}
              className="w-full font-size-body bg-[#141414] border border-[#333333] rounded-xl px-4 py-3 text-[#f9f8ed] focus:outline-none focus:border-[#ff4d4d]"
            >
              <option value="Paulistana Clássica (Calabresa curada, cebola e orégano)">
                Paulistana Clássica
              </option>
              <option value="Frango com Catupiry® Legítimo">
                Frango com Catupiry® Legítimo
              </option>
              <option value="Pepperoni O Paulistano">
                Pepperoni O Paulistano
              </option>
              <option value="Margherita Especial">
                Margherita Especial
              </option>
              <option value="Portuguesa do Bixiga">
                Portuguesa do Bixiga
              </option>
              <option value="Quatro Queijos Nobres">
                Quatro Queijos Nobres
              </option>
              <option value="Burrata ao Pesto & Parma">
                Burrata ao Pesto & Parma
              </option>
              <option value="Banana com Canela & Açúcar (Doce)">
                Banana com Canela & Açúcar (Doce)
              </option>
              <option value="Quero consultar o cardápio completo no WhatsApp">
                Outro sabor / Consultar no WhatsApp
              </option>
            </select>
          </div>

          {/* Delivery or Balcão (Buttons without icons) */}
          <div>
            <label className="block font-size-body font-medium text-[#f9f8ed]/90 mb-2">
              Modalidade de pedido:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`font-size-body py-2.5 px-4 rounded-xl border text-center font-medium transition-all cursor-pointer ${
                  orderType === 'delivery'
                    ? 'border-[#ff4d4d] bg-[#ff4d4d]/15 text-[#f9f8ed] font-bold'
                    : 'border-[#333333] bg-[#141414] text-[#f9f8ed]/70 hover:bg-[#282828]'
                }`}
              >
                Entrega (Delivery)
              </button>

              <button
                type="button"
                onClick={() => setOrderType('retirada')}
                className={`font-size-body py-2.5 px-4 rounded-xl border text-center font-medium transition-all cursor-pointer ${
                  orderType === 'retirada'
                    ? 'border-[#ff4d4d] bg-[#ff4d4d]/15 text-[#f9f8ed] font-bold'
                    : 'border-[#333333] bg-[#141414] text-[#f9f8ed]/70 hover:bg-[#282828]'
                }`}
              >
                Retirar no Balcão
              </button>
            </div>
          </div>

          {/* Address input if delivery */}
          {orderType === 'delivery' && (
            <div>
              <label className="block font-size-body font-medium text-[#f9f8ed]/90 mb-2">
                Bairro e endereço em Palhoça / SC:
              </label>
              <input
                type="text"
                placeholder="Ex: Praia do Sonho, Rua..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full font-size-body bg-[#141414] border border-[#333333] rounded-xl px-4 py-3 text-[#f9f8ed] placeholder-[#f9f8ed]/30 focus:outline-none focus:border-[#ff4d4d]"
              />
            </div>
          )}

          {/* Custom Notes */}
          <div>
            <label className="block font-size-body font-medium text-[#f9f8ed]/90 mb-2">
              Observações (opcional):
            </label>
            <input
              type="text"
              placeholder="Ex: Sem cebola, massa bem crocante..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full font-size-body bg-[#141414] border border-[#333333] rounded-xl px-4 py-3 text-[#f9f8ed] placeholder-[#f9f8ed]/30 focus:outline-none focus:border-[#ff4d4d]"
            />
          </div>

        </div>

        {/* Modal Footer CTA (Strictly NO icon as requested: 'tire o ícone dos botões') */}
        <div className="p-6 bg-[#181818] border-t border-[#2e2e2e]">
          <button
            onClick={handleSendToWhatsApp}
            className="w-full font-size-body inline-flex items-center justify-center bg-[#ff4d4d] hover:bg-[#e63939] text-[#f9f8ed] py-3.5 rounded-full font-bold shadow-lg shadow-[#ff4d4d]/25 transition-all cursor-pointer text-center"
          >
            Enviar Pedido para o WhatsApp
          </button>
          <p className="font-size-body text-[#f9f8ed]/50 text-center mt-3 text-sm">
            Atendimento ágil de Terça a Domingo, das 18h30 às 23h30.
          </p>
        </div>

      </div>
    </div>
  );
}
