import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";
import NavBar from "./NavBar";
import Body from "./Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UnderWeight from "./UnderWeight";
import HealthyWeight from "./HealthWeight";
import OverWeight from "./OverWeight";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/UnderWeight",
        element: <UnderWeight />,
      },
      {
        path: "/HealthyWeight",
        element: <HealthyWeight />,
      },
      {
        path: "/OverWeight",
        element: <OverWeight />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
