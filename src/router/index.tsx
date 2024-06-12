import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
// lazy layout
const Home = lazy(()=>import("@/views/home"));

const routes:RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={"/home"}></Navigate>
  },
  {
    path: "/home",
    element: <Home/>
  }
];

export default routes;
