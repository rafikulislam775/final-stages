import Title from "../../pages/Title";
import img1 from "../../assets/icons/1.png";
import img2 from "../../assets/icons/2.png";
import img3 from "../../assets/icons/3.png";
import img4 from "../../assets/icons/4.png";
import img5 from "../../assets/icons/5.png";
import img6 from "../../assets/icons/6.png";
import img7 from "../../assets/icons/7.png";
import img8 from "../../assets/icons/8.png";
import img9 from "../../assets/icons/9.png";
import img10 from "../../assets/icons/10.png";
import img11 from "../../assets/icons/11.png";
import img12 from "../../assets/icons/12.png";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const Price = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <Title>Price</Title>
      </div>
      <div>
        <section className="">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mt-6 mx-auto mb-16 text-center">
              <h2 className="text-2xl font-bold md:text-4xl">
                制作費用はなんと <span className="text-red-500">０円！</span>{" "}
                <br />
                必要なのは月額費用だけです。
              </h2>
            </div>
            <div className="flex flex-col md:flex-row  flex-wrap items-stretch -mx-4">
              <div className="flex  flex-1 w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div
                  className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(255, 0, 0, 0.35), rgba(255, 0, 255, 0.35))",
                    backdropFilter: "blur(8px)", // Add a backdrop filter for the blurred effect
                    WebkitBackdropFilter: "blur(8px)", // For cross-browser support
                  }}
                >
                  <div className="space-y-2">
                    <h4 className="text-2xl md:text-5xl font-bold">Standard</h4>
                    <h2 className="border-b-4  ">
                      中小企業向けのシンプルサイト！
                    </h2>
                    <span className="text-6xl font-bold">
                      ¥9,800
                      <span className="text-sm ">/月 （税込¥10,780）</span>
                    </span>
                  </div>
                  <p className=" text-center text-2xl  ">
                    <span className="bg-red-500 p-2 text-white rounded-md mb-5">
                      年間まとめ払い
                    </span>
                    <span className="text-red-500"> ¥107,800 / 年 </span>
                    <br />
                    <span className="mt-10">
                      ※年間まとめ払いなら
                      費用1ヶ月分と事務手数料が割引されます！
                    </span>
                  </p>
                  <div className="flex w-full gap-4 py-5  bg-opacity-50">
                    <h1 className="absolute bg-red-500 p-2 rounded-md text-white">
                      プラン比較
                    </h1>
                    {/* one line */}
                    <div className="grid bg-black rounded-lg shadow-2xl text-white bg-opacity-50 mt-3 justify-center border-red-400  flex-1  grid-rows-3 grid-flow-col gap-4">
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img1}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>ページ数5P</h2>
                        </div>
                      </div>
                      <div>
                        <div className="avatar grid  ">
                          <div className="w-20 rounded">
                            <img
                              src={img2}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>ブログ構築</h2>
                        </div>
                      </div>
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img3}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>月2回変新無料</h2>
                        </div>
                      </div>
                    </div>
                    {/* one 2 */}
                    <div className="grid flex-1  grid-rows-3 grid-flow-col gap-4">
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img4}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>オリジナルデザイン</h2>
                        </div>
                      </div>
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img5}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>お知らせ機能</h2>
                        </div>
                      </div>
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img6}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>基本アニメーション</h2>
                        </div>
                      </div>
                    </div>
                    {/* one 3 */}
                    <div className="grid flex-1  grid-rows-3 grid-flow-col gap-4">
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img7}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>有料素材提供</h2>
                        </div>
                      </div>
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img8}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>レスポンシブ対応</h2>
                        </div>
                      </div>
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img9}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>基本SEO設定</h2>
                        </div>
                      </div>
                    </div>
                    {/* one 4*/}
                    <div className="grid   grid-rows-3 grid-flow-col gap-4">
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img10}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>独自ドメイン</h2>
                        </div>
                      </div>
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img11}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>問い合わせフォーム</h2>
                        </div>
                      </div>
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img12}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>セキュリティ設定</h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="flex-1 space-y-2">
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        1ページの長さ：上限4,500pxまで（A4用紙横向き約5枚ほど）
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        支払方法（月額）：「口座引き落とし」または「クレジットカード継続課金」
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        支払方法（年間まとめ払い）：「銀行振込」または「クレジットカード決済」
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        初月のお支払い分に事務手数料5,500円を頂戴いたします。年間まとめ払いの方のみ事務手数料が割引されます。
                      </span>
                    </li>
                  </ul>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="inline-block w-full px-5 py-3 font-bold text-center rounded dark:bg-gray-800 dark:text-violet-400"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <div className="flex flex-1 w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div
                  className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(200, 0, 0, 0.35), rgba(25, 0, 89, 0.35))",
                    backdropFilter: "blur(8px)", // Add a backdrop filter for the blurred effect
                    WebkitBackdropFilter: "blur(8px)", // For cross-browser support
                  }}
                >
                  <div className="space-y-2 text-black">
                    <h4 className="text-2xl md:text-5xl font-bold">Business</h4>
                    <h2 className="border-b-4  ">本格的なサイト運用が可能！</h2>
                    <span className="text-6xl font-bold">
                      ¥13,800
                      <span className="text-sm ">/月 （税込¥15,180）</span>
                    </span>
                  </div>
                  <p className=" text-center text-2xl  ">
                    <span className="bg-red-500 p-2 text-white rounded-md mb-5">
                      年間まとめ払い
                    </span>
                    <span className="text-red-500"> ¥151,800 / 年 </span>
                    <br />
                    <span className="mt-10">
                      ※年間まとめ払いなら
                      費用1ヶ月分と事務手数料が割引されます！
                    </span>
                  </p>
                  <div className="flex w-full gap-4 py-5  bg-opacity-50">
                    <h1 className="absolute bg-red-500 p-2 rounded-md text-white">
                      プラン比較
                    </h1>
                    {/* one line */}
                    <div className="grid bg-black rounded-lg shadow-2xl text-white bg-opacity-50 mt-3 justify-center border-red-400  flex-1  grid-rows-3 grid-flow-col gap-4">
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img1}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>ページ数5P</h2>
                        </div>
                      </div>
                      <div>
                        <div className="avatar grid  ">
                          <div className="w-20 rounded">
                            <IoShieldCheckmarkSharp className="text-5xl text-center ml-4 text-green-600"></IoShieldCheckmarkSharp>
                          </div>
                          <h2>ブログ構築</h2>
                        </div>
                      </div>
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img3}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>月5回変新無料</h2>
                        </div>
                      </div>
                    </div>
                    {/* one 2 */}
                    <div className="grid flex-1  grid-rows-3 grid-flow-col gap-4">
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img4}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>オリジナルデザイン</h2>
                        </div>
                      </div>
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img5}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>お知らせ機能</h2>
                        </div>
                      </div>
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img6}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>基本アニメーション</h2>
                        </div>
                      </div>
                    </div>
                    {/* one 3 */}
                    <div className="grid flex-1  grid-rows-3 grid-flow-col gap-4">
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img7}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>有料素材提供</h2>
                        </div>
                      </div>
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img8}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>レスポンシブ対応</h2>
                        </div>
                      </div>
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img9}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>基本SEO設定</h2>
                        </div>
                      </div>
                    </div>
                    {/* one 4*/}
                    <div className="grid   grid-rows-3 grid-flow-col gap-4">
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img10}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>独自ドメイン</h2>
                        </div>
                      </div>
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img11}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>問い合わせフォーム</h2>
                        </div>
                      </div>
                      <div>
                        <div className="avatar grid ">
                          <div className="w-20 rounded">
                            <img
                              src={img12}
                              alt="Tailwind-CSS-Avatar-component"
                            />
                          </div>
                          <h2>セキュリティ設定</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 dark:text-gray-900">
                    <li className="flex items-start space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        1ページの長さ：上限4,500pxまで（A4用紙横向き約5枚ほど）
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        支払方法（月額）：「口座引き落とし」または「クレジットカード継続課金」
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        支払方法（年間まとめ払い）：「銀行振込」または「クレジットカード決済」
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        初月のお支払い分に事務手数料5,500円を頂戴いたします。年間まとめ払いの方のみ事務手数料が割引されます。
                      </span>
                    </li>
                  </ul>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="inline-block w-full px-5 py-3 font-semibold tracki text-center rounded dark:bg-violet-400 dark:text-gray-900"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Price;
