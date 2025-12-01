function TendenciesCard({ tendenciesCoffee }) {
  return (
    <>
      {tendenciesCoffee.map((item, i) => (
        <div 
          key={i}
          className="
            bg-white overflow-hidden 
            w-[180px] sm:w-[200px] md:w-[230px] lg:w-[250px] xl:w-[260px]
            shrink-0
            h-[250px] sm:h-[270px] md:h-[290px]
            shadow-[0_3px_15px_rgba(0,0,0,0.20)] 
            p-3 sm:p-4 md:p-5
            flex flex-col gap-2 items-center justify-center 
            transition-all duration-300 
            hover:scale-105 sm:hover:scale-110 
            hover:shadow-2xl 
            hover:border hover:border-[#8B5A05] 
            hover:z-10 
            cursor-pointer
            rounded-lg
          "
        >
          <div className="flex flex-col items-center gap-0 relative mt-2 sm:mt-3 md:mt-4">
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain transition-transform duration-300 relative z-10 mb-2" 
            />
            <span className="w-16 sm:w-20 md:w-24 h-2 sm:h-2.5 md:h-3 rounded-full shadow shadow-black blur-sm"></span>
          </div>
          <h3 className="font-semibold text-lg text-center mt-2">{item.title}</h3>
          <p className="text-sm text-center px-2 line-clamp-2">{item.description}</p>
        </div>
      ))}
    </>
  );
}

export { TendenciesCard };
