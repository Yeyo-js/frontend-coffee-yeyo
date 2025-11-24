import { CakeSlice, Coffee, Cookie, Star } from "lucide-react";
import { MyTemplate } from "../templates/myTemplate";

function LetterPage() {
  const cafes = [
    {
      nombre: "Capuchino de chocolate",
      precio: "S/.12.00",
      rating: 4.2,
      imagen: "/public/CF-CHOCOLATE.png",
    },
    {
      nombre: "Café con leche y caramelo",
      precio: "S/.12.00",
      rating: 4.2,
      imagen: "/public/CF-CARAMELO.png",
    },
    {
      nombre: "Bebida de chocolate",
      precio: "S/.12.00",
      rating: 4.2,
      imagen: "/public/VD-CHOCOLATE-2.png",
    },
    {
      nombre: "Café helado de chocolate",
      precio: "S/.12.00",
      rating: 4.2,
      imagen: "/public/CHOCOLATE-HELADO.png",
    },
    {
      nombre: "Batido de Oreo",
      precio: "S/.12.00",
      rating: 4.2,
      imagen: "/public/VATIDO-OREO.png",
    },
    {
      nombre: "Café con leche de fresa",
      precio: "S/.12.00",
      rating: 4.2,
      imagen: "/public/CF-FRESA.png",
    },
    {
      nombre: "café moca",
      precio: "S/.12.00",
      rating: 4.2,
      imagen: "/public/CF-MOCA.png",
    },
    {
      nombre: "Café con leche",
      precio: "S/.12.00",
      rating: 4.2,
      imagen: "/public/CF-LECHE.png",
    },
  ];

  return (
    <MyTemplate>
      <div className="w-full bg-[#FFFAD3]">
        <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-[#5a3a06]">Cafes</h1>

          <nav className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#4b2e11] text-[#fff6e8] px-3 py-1.5 rounded-full text-sm shadow-sm">
              <span>
                <Coffee />
              </span>
              <span className="hidden sm:inline">Cafes</span>
            </button>

            <button className="flex items-center gap-2 bg-[#f7d9b6] text-[#5a3710] px-3 py-1.5 rounded-full text-sm border border-[#d7b78a] shadow-sm">
              <span>
                <Cookie />
              </span>
              <span className="hidden sm:inline">Galletas</span>
            </button>

            <button className="flex items-center gap-2 bg-[#f7d9b6] text-[#5a3710] px-3 py-1.5 rounded-full text-sm border border-[#d7b78a] shadow-sm">
              <span>
                <CakeSlice />
              </span>
              <span className="hidden sm:inline">Tortas</span>
            </button>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto px-6 pb-12  min-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cafes.map((cafe) => (
              <article className="bg-[#d6c394] rounded-2xl p-5 text-center shadow-md relative">
                <h3 className="font-semibold text-lg text-[#432a0c] mb-2">
                  {cafe.nombre}
                </h3>

                <div className="flex items-center relative">
                  <div className="flex flex-col items-start gap-2 text-sm mb-3 text-[#2e2a23]">
                    <span className="flex items-center gap-1">
                      <strong>{cafe.rating}</strong>
                      <Star />
                    </span>

                    <button className="bg-[#fdf2dd] border border-[#b8925c] px-4 py-2 rounded-full font-semibold hover:bg-[#FFE5B6]">
                      Pedir
                    </button>
                  </div>

                  <div className="w-full h-40 mb-4 flex items-center justify-center">
                    <img
                      src={cafe.imagen}
                      alt={cafe.nombre}
                      className="h-full object-contain"
                    />
                  </div>
                  <div className="absolute top-0 left-0 p-4 z-10 ml-38 bg-white/40 rounded-3xl">
                    <span className="font-semibold ml-2">{cafe.precio}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </MyTemplate>
  );
}

export { LetterPage };
