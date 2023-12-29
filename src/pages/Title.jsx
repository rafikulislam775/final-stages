const Title = ({ children }) => {
  return (
    <div className="container relative text-wrap">
      <h1 className="title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl inline-block relative z-10 p-2 border-b-4 border-dashed border-red-500 font-bold">
        {children}
      </h1>
      <h1 className="absolute text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl bottom-5 left-1/2 transform -translate-x-1/4 opacity-20 font-extrabold z-0">
        {children == "Price"
          ? "料金"
          : children || children == "Services"
          ? "サービス"
          : children}
      </h1>
    </div>
  );
};

export default Title;
