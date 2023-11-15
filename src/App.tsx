import React, { useEffect, useState } from "react";
import back from "./assets/main_back.png";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import BookReview from "./components/BookReview";
import BookFeed from "./components/BooksFeed";
import BookDetail from "./components/BookDetails";
import BookCollection from "./components/BooksCollection";
import PreLoader from "./components/PreLoader";
import { useDispatch, useSelector } from "react-redux";
import BookHub from "./components/BookHub";
import Library from "./components/Library";
import Featured from "./components/Featured";
import NewArrivals from "./components/New Arrivals";
import Header from "./components/Header";
import BookDetails from "./components/BookDetails";

function App() {
  const webTitle = "Bookstagram";
  const booksFeed = "Books Feed";

  return (
    <div
      className="body"
      style={{ backgroundColor: "#fff8f2", minHeight: "730px" }}
    >
      <Home></Home>
      {location.pathname === "/" && (
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="row">
            <h1>Welcome to Bookstagram</h1>
          </div>
          <Link className="btn btn-dark " to="/BookHub">
            Explore Now!
          </Link>
        </div>
      )}
      <Routes>
        <Route path="/BooksFeed" element={<BookFeed />} />
        <Route path="/BooksCollection/*" element={<BookCollection />} />
        <Route path="/BookReview" element={<BookReview />} />
        <Route path="/BookDetails/:bookId" element={<BookDetails />} />
        <Route path="/BookHub" element={<BookHub />} />
        <Route path="/Library/*" element={<Library />} />
        <Route path="/NewArrivals/*" element={<NewArrivals />} />
        <Route path="/Featured/*" element={<Featured />} />
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
