
import { BannerBgCurve } from "../molecules/bannerBgCurve"
import { BannerButtons } from "../molecules/bannerButtons"
import { BannerCoffee } from "../molecules/bannerCupCoffe"

function HomeBanner() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300 
          md:bg-center sm:bg-position-[center_30%]"
        style={{ backgroundImage: "url('/HOME_LOGO.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
      </div>
      <article className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 text-white z-10 pt-20 md:pt-0">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 font-joti">
          BROWN COFFEE
        </h2>

        <p className="max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg lg:text-m mb-6 md:mb-8 lg:mb-10 font-joti text-[#FFBB00] leading-relaxed">
          "Siéntete como en casa. Aquí te esperamos con café recién molido,
          postres recién horneados y helados irresistibles. Cada visita es una oportunidad
          para desconectarte y disfrutar del momento. Déjate envolver por el aroma,
          los sabores y la calidez de nuestro espacio."
        </p>
        <BannerBgCurve/>
        <BannerButtons/>
      </article>
      
      <BannerCoffee/>
    </section>
  )
}

export { HomeBanner }