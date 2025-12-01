function Link({
  href, 
  onClick, 
  className = '', 
  variant = 'default',
  text, 
  children
}) {

  const variants = {
    default: `
      hover:text-blue-800 
      hover:underline 
      transition-colors
    `,
    primary: `
      px-6 sm:px-8 md:px-10 
      py-3 md:py-3.5 
      bg-gradient-to-br from-white to-[#725800]
      text-black font-semibold 
      rounded-lg 
      hover:from-[#725800] hover:to-white
      transition-all duration-300 
      hover:-translate-y-[3px]
      text-center 
      shadow-lg hover:shadow-xl 
      text-sm sm:text-base md:text-lg
    `,
    secondary: ``
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        ${className}
        ${variants[variant] || variants.default}
      `}
    >
      {children || text}
    </a>
  );
}

export { Link };
