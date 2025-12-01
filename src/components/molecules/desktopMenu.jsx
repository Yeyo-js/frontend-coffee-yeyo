import { Link } from "../atoms/links";
import { NavbarLink } from "../atoms/navbarLink";
import { Title } from "../atoms/titles";

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

        <Link 
          href="/" 
          variant="secondary"
          className=""
        >
          <img 
            src="/LOGO.png" 
            alt="Logo de la empresa" 
            className="w-14 md:w-16 lg:w-20" 
          />
          <Title 
            text={'BROUN COFFEE'}
            level="h2"
            variant="secondary"
            size="large"
            className="text-[#FFBB00] font-bold text-xs md:text-sm"/>
        </Link>

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