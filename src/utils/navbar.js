import React from "react";

// useId hook:
import useUniqueId from "../hooks/useId";

// pages:
import Admin from "../components/Admin";
import Users from "../components/Users";
import Region from "../components/Region";
import Branch from "../components/Branch";
import Group from "../components/Group";
import OneUser from "../components/OneUser";

//icons:
import {
  BsFillBuildingsFill,
  BsFillPeopleFill,
  BsFillShieldLockFill,
} from "react-icons/bs";

// React.lazy pages:
// const UsersPage = React.lazy(() => import("../pages/Users"));
// const AdminPage = React.lazy(() => import("../components/Admin/index.jsx"));
// const RegionPage = React.lazy(() => import("../pages/Region"));

export const navbar = [
  {
    id: useUniqueId,
    title: "Filiallar",
    path: "/region",
    icon: <BsFillBuildingsFill className="icon" />,
    element: <Region />,
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Talabalar",
    path: "/users",
    element: <Users />,
    icon: <BsFillPeopleFill className="icon" />,
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Adminlar",
    path: "/admin",
    element: <Admin />,
    icon: <BsFillShieldLockFill className="icon" />,
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Branch",
    path: "/region/branch",
    element: <Branch />,
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Group",
    path: "/region/branch/group",
    element: <Group />,
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "User",
    path: "/region/branch/group/user",
    element: <OneUser />,
    private: false,
    hidden: true,
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
