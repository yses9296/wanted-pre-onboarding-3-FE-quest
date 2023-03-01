import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "pages/NotFoundPage";
import PageA from "pages/PageA";
import PageB from "pages/PageB";
import PageC from "pages/PageC";
import Root from "pages/Root";
import SignInPage from "pages/SignInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "pageA",
        element: <PageA />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "pageB",
        element: <PageB />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "pageC",
        element: <PageC />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
  { path: "/signin", element: <SignInPage />, errorElement: <NotFoundPage /> },
]);

export default router;
