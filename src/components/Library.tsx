import Box from "@mui/material/Box";
import { ImageList, ImageListItem } from "@mui/material";
import "../App.css";
import { Link, Route, Routes } from "react-router-dom";
import BookDetails from "./BookDetails";
import { useSelector } from "react-redux";

function Library() {
  const librarybooks = useSelector((state) => state.librarybook);

  const setEffect = () => {};

  return (
    <>
      <div className="container">
        <div className="row">
          {librarybooks.map((librarybook) => {
            return (
              <div className="col-md-3 g-2" key={librarybook.bookId}>
                <div className="content">
                  {" "}
                  <Link to={`/BookDetails/${librarybook.bookId}`}>
                    <div className="content-overlay"></div>{" "}
                    <img className="content-image" src={librarybook.image} />
                    <div className="content-details fadeIn-bottom">
                      <h4 className="content-title">{librarybook.bookTitle}</h4>
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

export default Library;
