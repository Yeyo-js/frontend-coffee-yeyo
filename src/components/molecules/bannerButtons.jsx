import { Link } from "../atoms/links"

function BannerButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-4 md:gap-6 lg:gap-16 w-full sm:w-auto">
          <Link
            text={'Ver Carta'}
            href="/letter"
            variant="primary"
          />
          <Link
            text={'Reservar'}
            href="/bookings"
            variant="primary"
          />
        </div>
    )
}

export { BannerButtons }