import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Contact from "../components/contact/Contact";
import Error from "../components/Home/Error";
import HomeLayout from "./HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/contacts",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;

