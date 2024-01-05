import { NavLink } from "react-router-dom";
import logo from "../../assets/logo1.png";
import Typewriter from "typewriter-effect";

const NavSection = () => {
  // const menus = (
  //   <>
  //     <li>
  //       <NavLink
  //         to="/"
  //         className={({ isActive }) => (isActive ? "bg-red-800" : "")}
  //       >
  //         Home
  //       </NavLink>
  //     </li>
  //     <li>
  //       <NavLink
  //         to="/messages"
  //         className={({ isActive }) => (isActive ? "bg-red-800" : "")}
  //       >
  //         Home
  //       </NavLink>
  //     </li>
  //     <li>
  //       <NavLink
  //         to="/messages"
  //         className={({ isActive }) => (isActive ? "bg-red-800" : "")}
  //       >
  //         Home
  //       </NavLink>
  //     </li>
  //   </>
  // );
  return (
    <nav>
      <div className="p-4 text-center bg-gradient-to-r from-red-500 to-fuchsia-300 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        制作費0円でホームページが開設できる
        "業界初"WEBサイト制作のサブスクリプション
      </div>

      <div className="flex justify-center items-center p-4">
        <img
          src={logo}
          alt="Logo"
          className="sm:w-48 sm:h-48 md:w-64 md:h-64 "
        />
      </div>

      <div className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-14">
        <span className="  text-red-500 font-bold">FINAL STAGE</span> に任せて
        <Typewriter
          options={{
            strings: [
              "ストレスフリーにしましょう",
              "プロのホームページを手に入れよう！",
              "お得なオファーで魅力的なホームページを手に入れませんか？",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      {/* ファイナル ステージ に任せてストレスフリーにしましょう */}
      {/* <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menus}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menus}</ul>
        </div>
       
      </div> */}
    </nav>
  );
};

export default NavSection;
