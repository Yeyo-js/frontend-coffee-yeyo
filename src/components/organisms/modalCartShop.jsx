import { useState } from "react";
import { FiCheckCircle, FiX  } from "react-icons/fi";

function CartShop({ setCartShopOpen }) {

  const [isClose, setIsClose] = useState(false);
  const [ordered, setOrdered] = useState(false); // 👈 Nuevo estado

  const CloseModal = () => {
    setIsClose(true);
    setTimeout(() => {
      setCartShopOpen(false);
    }, 400);
  };

  const handleBgClick = (e) => {
    if (e.target === e.currentTarget) {
      CloseModal();
    }
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleOrder = () => {
    setOrdered(true); // Mostrar animación + mensaje
  };

  const title = "Tus Productos";

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-998 transition-opacity duration-400 
        ${isClose ? "opacity-0" : "opacity-100"}`}
      onClick={handleBgClick}
    >
      <section
        className="absolute text-black z-999 p-3 rounded top-20 right-6 bg-white w-200 flex flex-col gap-5 items-center justify-center"
        onClick={handleModalClick}
      >
        <div className="relative flex w-full h-full">
          <h2 className="text-2xl font-bold my-o mx-auto">{title}</h2>
          <FiX size={'20px'} onClick={CloseModal} className="absolute top-0 right-0 transition-transform duration-500 hover:rotate-90"/>
        </div>

        <div className="h-40 w-190 flex flex-col items-center rounded justify-center text-gray-300 border border-gray-400 gap-3">

          {/* Ícono animado */}
          {ordered && (
            <FiCheckCircle
              size={55}
              className="text-green-500 animate-check"
            />
          )}

          {/* Mensaje */}
          <h3 className="text-gray-300">
            {ordered ? "Pedido realizado con éxito" : "No hay productos en carrito"}
          </h3>
        </div>

        <button 
          onClick={handleOrder} 
          className="py-1 px-5 rounded font-semibold
            bg-linear-to-r from-amber-300 to-amber-500
            transition-all  duration-500 
            hover:from-amber-500 to-amber-300
            active:scale-90 shadow hover:shadow-lg
          ">
          Pedir
        </button>

      </section>

      <style>
        {`
          .animate-check {
            animation: pop 0.5s ease-out forwards;
          }

          @keyframes pop {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            60% {
              transform: scale(1.2);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export { CartShop };
