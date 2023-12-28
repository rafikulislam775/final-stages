import { MdOutlineDoubleArrow } from "react-icons/md";
const Body = () => {
  return (
    <div className="text-center">
      <div>
        <h1 className=" mt-10 text-6xl ">制作費0円の月額制Webサイト</h1>
        <h2 className="text-xl m-2 text-red-500">
          月額9,800円〜（税込10,780円）、 御社の専属Webサイト担当が雇えます
        </h2>
        <button className="btn m-10 text-2xl btn-error px-10 text-white hover:shadow-2xl  hover:shadow-orange-500 ">
          {" "}
          まずは無料相談{" "}
          <span className="p-2 animate-ping">
            <MdOutlineDoubleArrow />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Body;
