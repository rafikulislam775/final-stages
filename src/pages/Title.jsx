const Title = ({ children }) => {
  return (
    <div className="container relative text-wrap mt-10">
      <h1 className=" title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl inline-block relative z-10 p-2 border-b-4 border-dashed border-red-500 font-bold">
        {children}
      </h1>
      <h1 className="absolute text-xl sm:text-2xl md:text-4xl lg:text-6xl  bottom-5 left-1/2 transform -top-6  -translate-x-1/4 opacity-20 font-extrabold z-0">
        {children === "Price"
          ? "料金"
          : children === "Services"
          ? "サービス"
          : children === "Contact Us"
          ? "お問い合わせ"
          : children}
      </h1>
    </div>
  );
};

export default Title;
