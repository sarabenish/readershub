import Box from "@mui/material/Box";
import { ImageList, ImageListItem } from "@mui/material";
import "../App.css";
import { Link, Route, Routes } from "react-router-dom";
import BookDetails from "./BookDetails";
import { useSelector } from "react-redux";
import React from "react";

function Featured() {
  const books = useSelector((state) => state.book);

  const setEffect = () => {};

  return (
    <>
      <div className="container">
        <div className="row">
          {books
            .filter((book) => book.collectionF == true)
            .map((book) => {
              return (
                <div className="col-md-3 g-2" key={book.bookId}>
                  <div className="content">
                    {" "}
                    <Link to={`/BookDetails/${book.bookId}`}>
                      <div className="content-overlay"></div>{" "}
                      <img className="content-image" src={book.image} />
                      <div className="content-details fadeIn-bottom">
                        <h4 className="content-title">{book.bookTitle}</h4>
                      </div>
                    </Link>{" "}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <Routes>
        <Route path="/BookDetails/:bookId" element={<BookDetails />} />
      </Routes>
    </>
  );
}

export default Featured;
