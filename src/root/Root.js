import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { navbar } from "../utils/navbar";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {navbar.map(({ id, path, element }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Route>
        <Route exact path="/filial" element={<Navigate to={"/users"} />} />
        <Route path="*" element={<h1>Not fount 404</h1>} />
      </Routes>
    </Router>
  );
};

export default Root;
