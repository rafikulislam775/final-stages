import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  //   const location = useLocation();

  //   useEffect(() => {
  //     // Check if there's a hash in the URL and scroll to the corresponding element
  //     const hash = location.hash;
  //     if (hash) {
  //       const targetElement = document.querySelector(hash);
  //       if (targetElement) {
  //         targetElement.scrollIntoView({ behavior: "smooth" });
  //       }
  //     }
  //   }, [location.hash]);

  return (
    <div>
      <div className="min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
