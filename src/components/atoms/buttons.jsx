function Button({
  text,
  onClick,
  className = '',
  type, 
  disabled,
  variant = 'default',


}) {
  const variants ={
    default : `mt-3 py-2.5 rounded-lg font-semibold
              bg-linear-to-r from-amber-400 to-amber-500
              hover:from-amber-500 hover:to-amber-600
              active:scale-95
              transition-all duration-300
              shadow-md hover:shadow-lg`,
    primary :'' //aca agregas mas estilos de botones y llamas por el nombre
  }
  return (
    <button 
            className={`
              ${className}
              ${variants[variant] || variants.default}
              `}
            onClick={onClick}
            type={type}
            disabled={disabled}
          >
            {text}
          </button>
    )
}

export { Button }