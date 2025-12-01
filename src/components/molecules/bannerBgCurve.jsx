function BannerBgCurve() {
  return (
    <div className="absolute bottom-0 left-0 w-full leading-none overflow-hidden">
      <svg
        className="relative block w-full h-24 sm:h-28 md:h-32 lg:h-40 xl:h-48"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="#ffffff"
      >
        <path
          d="M0,180L75,196C190,210,200,300,100,200.3C640,331,800,117,960,60.8C1100,0,1200,0,1320,80L1440,165V320H0Z"
        />
      </svg>
    </div>
  )
}

export { BannerBgCurve }