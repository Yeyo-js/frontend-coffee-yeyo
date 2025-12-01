import { MyTemplate } from "../templates/myTemplate"
import { AboutUsHeroSection } from "../organisms/aboutUs/AboutUsHeroSection"
import { AboutUsGallerySection } from "../organisms/aboutUs/AboutUsGallerySection"
import { WhatsAppButton } from "../atoms/WhatsAppButton"
import { AboutUsTeamCarousel } from "../organisms/aboutUs/aboutUsTeamCarousel"

function AbouUsPage() {
  return (
    <MyTemplate>
      <div className="fixed inset-0 z-[-1]">
        <img 
          src="../../../public/FONDO-NOSOTROS.jpg" 
          alt="Fondo Café" 
          className="w-full h-full object-cover object-center opacity-100 blur-[3px] scale-105"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <AboutUsHeroSection />
      <AboutUsTeamCarousel />
      <AboutUsGallerySection />
      <WhatsAppButton />

    </MyTemplate>
  )
}

export { AbouUsPage }