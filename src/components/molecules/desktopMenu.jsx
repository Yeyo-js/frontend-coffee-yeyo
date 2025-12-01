import { NavbarLink } from "../atoms/navbarLink";

function NavbarMenu({ onLinkClick }) {

  const menu1 = [
    {
      text: 'Carta',
      href: '/letter'
    },
    {
      text: 'Nosotros',
      href: '/aboutus'
    },
  ]

  const menu2 = [
    {
      text: 'Reservas',
      href: '/bookings'
    },
    {
      text: 'Contacto',
      href: '/contact'
    },
  ]

  return (
    <>
      <ul className="hidden md:flex items-center gap-4 md:gap-5 lg:gap-12 xl:gap-16 2xl:gap-15 text-[#FFBB00] relative">
        {/* Menu 1 - Izquierda */}
        {menu1.map((item, index) => (
          <li key={index}>
            <NavbarLink
              href={item.href}
              text={item.text}
            />
          </li>
        ))}

        <a 
          href="/" 
          className="flex flex-col items-center justify-center mt-6 md:mt-8 bg-[#06141F] px-6 md:px-8 lg:px-10 pb-1 rounded-2xl z-100 border-b border-[#FFBB00]"
        >
          <img 
            src="/LOGO.png" 
            alt="Logo de la empresa" 
            className="w-14 md:w-16 lg:w-20" 
          />
          <h1 className="text-[#FFBB00] font-bold text-xs md:text-sm">
            BROUN COFFEE
          </h1>
        </a>

        {menu2.map((item, index) => (
          <li key={index}>
            <NavbarLink
              href={item.href}
              text={item.text}
            />
          </li>
        ))}
      </ul>

      <div className="md:hidden flex flex-col space-y-3 w-full">
        {[...menu1, ...menu2].map((item, index) => (
          <div key={index}>
            <NavbarLink
              href={item.href}
              text={item.text}
              onClick={onLinkClick}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export { NavbarMenu }