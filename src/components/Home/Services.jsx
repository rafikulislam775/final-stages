import { IoCheckmarkDoneCircle } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/services1.jpg";
import img2 from "../../assets/services2.jpg";
import img3 from "../../assets/man.png";
import Title from "../../pages/Title";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link } from "react-scroll";
const Services = () => {
  return (
    <section className="">
      <div className="p-10 text-center">
        <Title>Services</Title>
        <h1 className="my-10 text-4xl">
          初期費用・制作費用0円で これだけのサポートをしています！
        </h1>
      </div>
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="md:text-4xl font-bold border-l-4 border-red-500 p-5  sm:text-xl ">
              Final Stage のサポート内容
            </h3>
            {/* <p className="mt-3 text-lg dark:text-gray-400">
              Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos
              etiam regione ut, persius eripuit quo id. Sit te euismod
              tacimates.
            </p> */}
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-red-400">
                    <IoCheckmarkDoneCircle className="text-4xl text-white"></IoCheckmarkDoneCircle>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-4xl font-medium ">
                    基本サイト5〜11ページ制作
                  </h4>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-red-400">
                    <IoCheckmarkDoneCircle className="text-4xl text-white"></IoCheckmarkDoneCircle>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-4xl font-medium ">オリジナルデザイン</h4>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-red-400">
                    <IoCheckmarkDoneCircle className="text-4xl text-white"></IoCheckmarkDoneCircle>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-4xl font-medium ">月2~5回の更新対応</h4>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-red-400">
                    <IoCheckmarkDoneCircle className="text-4xl text-white"></IoCheckmarkDoneCircle>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-4xl font-medium ">
                    レスポンシブ対応（スマホ最適化）
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img
              src={img1}
              alt=""
              className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
            />
          </div>
        </div>
        <div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-red-400">
                      <IoCheckmarkDoneCircle className="text-4xl text-white"></IoCheckmarkDoneCircle>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-4xl font-medium ">
                      独自ドメイン取得・設定
                    </h4>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-red-400">
                      <IoCheckmarkDoneCircle className="text-4xl text-white"></IoCheckmarkDoneCircle>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-4xl font-medium ">
                      有料写真・イラスト使用
                    </h4>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-red-400">
                      <IoCheckmarkDoneCircle className="text-4xl text-white"></IoCheckmarkDoneCircle>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-4xl font-medium ">
                      お知らせやブログなどCMS対応
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img
                src={img2}
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sm: text-xl md:text-3xl mb-5 text-red-500 z-20">
        <Marquee>その他ご相談も・ご要望も承っております！</Marquee>
      </div>
      <div>
        <div className="bg-opacity-70  bg-red-400 ">
          <div className="flex items-center justify-evenly border flex-col lg:flex-row-reverse">
            <img src={img3} className="max-w-sm" />
            <div className="">
              <h1 className=" text-xl md:text-5xl text-white font-bold">
                W E B 担 当 を
              </h1>
              <p className="py-6 md:text-4xl">
                雇う必要がなくなります！ <br />
                制作費0円にも関わらず完全オリジナルデザイン
              </p>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset based on your layout
                duration={500}
              >
                <button className="btn m-10 text-2xl btn-error px-10 text-white hover:shadow-2xl hover:shadow-orange-500 ">
                  まずは無料相談
                  <span className="p-2 animate-ping">
                    <MdOutlineDoubleArrow />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
