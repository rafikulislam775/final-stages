import { NavLink, useRouteError } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";

export default function Error() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <section className="flex items-center h-screen sm:p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col text-9xl items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
          <span className="animate-ping">
            <TbFaceIdError />
          </span>

          <p className="text-3xl">
            <i>{error.statusText || error.message}</i>
          </p>
          <p className="text-2xl font-semibold md:text-3xl">
            申し訳ありませんが、このページが見つかりませんでした。
          </p>
          <p className="mt-4 text-sm mb-8 dark:text-gray-400">
            でも心配しないでください、ホームページで他にもたくさんの情報が見つかります。
          </p>

          <button className="btn btn-error ">
            <NavLink to="/" className="px-8 py-3 font-semibold rounded d">
              ホームページに戻る
            </NavLink>
          </button>
        </div>
      </section>
    </div>
  );
}
