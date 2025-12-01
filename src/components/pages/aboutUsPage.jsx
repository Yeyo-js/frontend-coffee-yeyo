import { MyTemplate } from "../templates/myTemplate"
import { AboutUsHeroSection } from "../organisms/aboutUs/AboutUsHeroSection"
import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

function AbouUsPage() {
  const teamMembers = [
    { name: "Juan Pérez", role: "Barista Principal", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "María Garcia", role: "Pastelera", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Carlos López", role: "Jefe de Barra", image: "https://randomuser.me/api/portraits/men/85.jpg" },
    { name: "Ana Torres", role: "Atención al Cliente", image: "https://randomuser.me/api/portraits/women/65.jpg" },
    { name: "Luis Diaz", role: "Tostador", image: "https://randomuser.me/api/portraits/men/22.jpg" },
  ]

  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlideChange = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      if (direction === 'next') {
        setStartIndex((prev) => (prev + 1) % teamMembers.length);
      } else {
        setStartIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
      }
      setIsAnimating(false);
    }, 300);
  };

  const getMemberAtPosition = (position) => {
    const index = (startIndex + position) % teamMembers.length;
    return teamMembers[index];
  };

  return (
    <MyTemplate>
      {/* --- CORRECCIÓN 1: FONDO PIXELEADO --- */}
      <div className="fixed inset-0 z-[-1]">
        {/* Agregué 'blur-[3px]'. Esto difumina la imagen para ocultar pixeles y dar efecto atmósfera */}
        <img 
          src="/../../../public/FONDO-NOSOTROS.jpg" 
          alt="Fondo Café" 
          className="w-full h-full object-cover object-center opacity-100 blur-[3px] scale-105" // scale-105 evita bordes blancos por el blur
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <AboutUsHeroSection />

      <section className="relative py-20 w-full mt-10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 font-joti drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
            Nuestro Equipo
          </h2>

          <div className="flex items-center justify-center w-full gap-2 md:gap-8">
            
            <button onClick={() => handleSlideChange('prev')} className="p-2 md:p-4 text-[#FFBB00] hover:text-white hover:scale-110 transition-all text-3xl md:text-5xl cursor-pointer z-20 drop-shadow-lg">
              <FaChevronLeft />
            </button>

            <div className={`grid grid-cols-1 md:grid-cols-3 items-center justify-items-center gap-4 md:gap-8 w-full max-w-5xl transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
              
              {[0, 1, 2].map((position) => {
                const member = getMemberAtPosition(position);
                const isCenterDesktop = position === 1;
                
                return (
                // --- CORRECCIÓN 2: FOTO TAPADA POR EL HUMO ---
                // Cambié 'md:opacity-50' por 'md:brightness-50'.
                // Ahora la foto se oscurece pero NO se vuelve transparente.
                <div key={position} className={`flex-col items-center transition-all duration-500 ${position !== 0 ? 'hidden md:flex' : 'flex'} ${isCenterDesktop ? 'scale-110 z-10 brightness-100' : 'md:scale-90 md:brightness-50 z-0'}`}>
                  
                  <div className={`w-48 h-48 sm:w-56 sm:h-56 rounded-full border-[4px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 ${isCenterDesktop ? 'border-[#FFBB00]' : 'border-[#9A6F28] grayscale'} md:hover:grayscale-0 md:hover:brightness-100`}>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className={`mt-6 text-center transition-all duration-500 ${isCenterDesktop ? 'opacity-100' : 'md:opacity-60'}`}>
                    <h3 className="text-[#FFBB00] text-2xl font-bold font-joti mb-1 drop-shadow-md">
                      {member.name}
                    </h3>
                    <p className="text-[#d1a656] text-sm uppercase tracking-widest font-bold">
                      {member.role}
                    </p>
                  </div>
                </div>
              )})}

            </div>

            <button onClick={() => handleSlideChange('next')} className="p-2 md:p-4 text-[#FFBB00] hover:text-white hover:scale-110 transition-all text-3xl md:text-5xl cursor-pointer z-20 drop-shadow-lg">
              <FaChevronRight />
            </button>
          </div>

          <div className="flex gap-3 mt-12">
            {teamMembers.map((_, i) => {
              const centerIndex = (startIndex + 1) % teamMembers.length;
              const isActive = i === centerIndex;
              return (
              <div 
                key={i}
                className={`h-3 rounded-full transition-all duration-500 shadow-lg ${isActive ? 'w-8 bg-[#FFBB00]' : 'w-3 bg-[#5c421b]'}`}
              ></div>
            )})}
          </div>

        </div>
      </section>
    </MyTemplate>
  )
}

export { AbouUsPage }