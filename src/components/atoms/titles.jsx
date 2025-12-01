function Title({
  level = 'h1',
  children,
  text,
  className = '',
  variant = 'default',
  align = 'left',
  weight = 'normal',
  ...props
}) {
  const Tag = level;

  const variants = {
    default: 'text-black',
    primary: 'text-white',
    secondary: 'text-[#FFBB00]',
    danger: 'text-red-500',
  };

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const defaultByLevel = {
    h1: 'text-4xl sm:text-5xl md:text-6xl',
    h2: 'text-3xl sm:text-4xl md:text-5xl',
    h3: 'text-2xl sm:text-3xl md:text-4xl',
    h4: 'text-xl sm:text-2xl md:text-3xl',
    h5: 'text-lg sm:text-xl',
    h6: 'text-base sm:text-lg',
  };

  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    bold: 'font-bold',
  };

  return (
    <Tag
      className={`
        ${defaultByLevel[level] || defaultByLevel.h1}
        ${weights[weight] || weights.normal}
        ${variants[variant] || variants.default}
        ${alignments[align] || alignments.left}
        ${className}
      `}
      {...props}
    >
      {children || text}
    </Tag>
  );
}

export { Title };
