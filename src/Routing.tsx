import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Faq } from "./pages/faq/Faq";
import { Guide } from "./pages/guide/Guide";
import { News } from "./pages/news/News";
import { Counsel } from "./pages/counsel/Counsel";

export const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <Navigate to="/FAQ" />,
    },
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "",
          element: <Navigate to="/FAQ" />,
        },
        {
          path: "FAQ",
          element: <Faq />,
        },
        {
          path: "Guide",
          element: <Guide />,
        },
        {
          path: "News",
          element: <News />,
        },
        {
          path: "Counsel",
          element: <Counsel />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
