import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import BookDetails from "./BookDetails";
import "../App.css";

function BookHub() {
  const books = useSelector((state) => state.book);
  const librarybooks = useSelector((state) => state.librarybook);

  const booksN = books.filter((book) => book.collectionN == true);
  const booksF = books.filter((book) => book.collectionF == true);

  const libBooks = librarybooks.slice(0, 6);
  const newBooks = booksN.slice(0, 6);
  const featuredBooks = booksF.slice(0, 6);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="p-2">
            <h2 style={{ color: "#2b2a2a" }}>In Your Library</h2>
          </div>
          <div className="p-2"></div>
          <div className="p-2 align-self-center">
            <Link to="/Library" style={{ color: "#2b2a2a" }}>
              See more
            </Link>
          </div>
        </div>
        <div className="row">
          {libBooks.map((book) => {
            return (
              <div className="col-md-2 g-2" key={book.bookId}>
                <div className="content">
                  {" "}
                  <Link to={`/BookDetails/${book.bookId}`}>
                    <div className="content-overlay"></div>{" "}
                    <img
                      className="content-image"
                      src={book.image}
                      style={{ height: "300px" }}
                    />
                    <div className="content-details fadeIn-bottom">
                      <h4 className="content-title">{book.bookTitle}</h4>
                    </div>
                  </Link>{" "}
                </div>
              </div>
            );
          })}
        </div>

        <div className="d-flex justify-content-between">
          <div className="p-2">
            <h2 style={{ color: "#2b2a2a" }}>New Arrivals</h2>
          </div>
          <div className="p-2"></div>
          <div className="p-2 align-self-center">
            <Link to="/NewArrivals" style={{ color: "#2b2a2a" }}>
              See more
            </Link>
          </div>
        </div>
        <div className="row">
          {newBooks
            .filter((book) => book.collectionN == true)
            .map((book) => {
              return (
                <div className="col-md-2 g-2" key={book.bookId}>
                  <div className="content">
                    {" "}
                    <Link to={`/BookDetails/${book.bookId}`}>
                      <div className="content-overlay"></div>{" "}
                      <img
                        className="content-image"
                        src={book.image}
                        style={{ height: "300px" }}
                      />
                      <div className="content-details fadeIn-bottom">
                        <h4 className="content-title">{book.bookTitle}</h4>
                      </div>
                    </Link>{" "}
                  </div>
                </div>
              );
            })}
        </div>

        <div className="d-flex justify-content-between">
          <div className="p-2">
            <h2 style={{ color: "#2b2a2a" }}>Featured</h2>
          </div>
          <div className="p-2"></div>
          <div className="p-2 align-self-center">
            <Link to="/Featured" style={{ color: "#2b2a2a" }}>
              See more
            </Link>
          </div>
        </div>
        <div className="row">
          {featuredBooks
            .filter((book) => book.collectionF == true)
            .map((book) => {
              console.log(book);
              return (
                <div className="col-md-2 g-2" key={book.bookId}>
                  <div className="content">
                    {" "}
                    <Link to={`/BookDetails/${book.bookId}`}>
                      <div className="content-overlay"></div>{" "}
                      <img
                        className="content-image"
                        src={book.image}
                        style={{ height: "300px" }}
                      />
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

export default BookHub;
