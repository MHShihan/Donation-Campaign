import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DonationDetails from "../pages/DonationDetails/DonationDetails";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("./data.json"),
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statics",
        element: <Statics></Statics>,
      },
      {
        path: "/donationDetails/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch("./data.json"),
      },
    ],
  },
]);

export default myCreatedRoute;
