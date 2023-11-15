import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import BooksCollection from "./BooksCollection";
import Header from "./Header";
import BooksFeed from "./BooksFeed";

function Home() {
  const webTitle = "Bookstagram";
  const location = useLocation();

  return (
    <div>
      <Header title="Bookstagram"></Header>
      {location.pathname === "/readershub/" && (
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="row">
            <h1>Welcome to Bookstagram</h1>
          </div>
          <Link className="btn btn-dark " to="/BookHub">
            Explore Now!
          </Link>
        </div>
      )}
    </div>
  );
}
export default Home;
