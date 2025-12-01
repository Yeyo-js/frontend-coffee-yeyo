function Title({
  level = 'h1',
  children,
  text,
  className = '',
  variant = 'default',
  align = 'left',
  size = 'medium',     
  weight = 'normal',   
  ...props
}) {
  const Tag = level;

  const variants = {
    default: 'text-black',
    primary: 'text-white',
    secondary: 'text-gray-400',
    danger: 'text-red-500',
  };

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const sizes = {
    small: 'text-base sm:text-lg md:text-xl',
    medium: 'text-lg sm:text-xl md:text-2xl',
    large: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
  };

  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    bold: 'font-bold',
  };

  return (
    <Tag
      className={`
        ${sizes[size] || sizes.medium}
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
