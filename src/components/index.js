import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";
import NavBar from "./NavBar";
import Body from "./Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UnderWeight from "./UnderWeight";

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
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
