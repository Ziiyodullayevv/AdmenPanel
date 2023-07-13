import React from "react";

// useId hook:
import useUniqueId from "../hooks/useId";

// pages:
import Admin from "../components/Admin";
import AllUser from "../components/AllUser";
import Region from "../components/Region";

//icons:
import { FaUsers } from "react-icons/fa";

// React.lazy pages:
// const AllUserPage = React.lazy(() => import("../pages/AllUser"));
// const AdminPage = React.lazy(() => import("../components/Admin/index.jsx"));
// const RegionPage = React.lazy(() => import("../pages/Region"));

export const navbar = [
  {
    id: useUniqueId,
    title: "All Users",
    path: "/",
    element: <AllUser />,
    private: false,
    hidden: false,
    icon: <FaUsers />,
  },
  {
    id: useUniqueId,
    title: "Admins",
    path: "/admin",
    element: <Admin />,
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Regions",
    path: "/region",
    element: <Region />,
    private: false,
    hidden: false,
  },
  //   {
  //     id: useUniqueId,
  //     title: "Sign In",
  //     path: "/signin",
  //     element: <h2>Sing In</h2>,
  //     private: false,
  //     hidden: true,
  //   },
  //   {
  //     id: useUniqueId,
  //     title: "Sign Up",
  //     path: "/signup",
  //     element: <h1>Sign Up</h1>,
  //     private: false,
  //     hidden: true,
  //   },
];
