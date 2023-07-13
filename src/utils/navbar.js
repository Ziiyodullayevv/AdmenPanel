import React from "react";

// useId hook:
import useUniqueId from "../hooks/useId";

// pages:
import Admin from "../components/Admin";
import AllUser from "../components/User";
import Region from "../components/Region";

//icons:
import {
  BsFillBuildingsFill,
  BsFillPeopleFill,
  BsFillShieldLockFill,
} from "react-icons/bs";

// React.lazy pages:
// const AllUserPage = React.lazy(() => import("../pages/AllUser"));
// const AdminPage = React.lazy(() => import("../components/Admin/index.jsx"));
// const RegionPage = React.lazy(() => import("../pages/Region"));

export const navbar = [
  {
    id: useUniqueId,
    title: "Regions",
    path: "/",
    icon: <BsFillBuildingsFill className="icon menu" />,
    element: <Region />,
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "All Users",
    path: "/users",
    element: <AllUser />,
    icon: <BsFillPeopleFill className="icon" />,
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Admins",
    path: "/admin",
    element: <Admin />,
    icon: <BsFillShieldLockFill className="icon" />,
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
