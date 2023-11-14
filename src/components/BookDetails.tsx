import image1 from "../assets/books/49110165.jpg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Reducer";
import { width } from "@mui/system";
import librarybooks, { addToLibrary } from "../store/library/librarybooks";

function BookDetails() {
  const { bookId } = useParams();
  const books = useSelector((state: RootState) => state.book);
  const feeds = useSelector((state: RootState) => state.feed);
  const librarybooks = useSelector((state: RootState) => state.librarybook);

  const bookIdInt = parseInt(bookId ?? "", 10);

  // At this point, bookIdInt is a valid integer, and you can use it in your code.
  console.log("Link ID:", bookIdInt);
  const bookSearch = books.find((item) => item.bookId === bookIdInt);
  const dispatch = useDispatch();

  const handleClick = () => {
    // Add the current book to the Redux store

    dispatch(addToLibrary(bookSearch));
    // You can also add other logic here, such as removing the book from the display or handling navigation.
  };

  if (!bookSearch) {
    return (
      <div>
        <h6> Book Not Found! </h6>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row" style={{ color: "#2b2a2a" }}>
        <div className="col-4 d-flex justify-content-center">
          <img
            src={`${bookSearch.image}?fit=crop&auto=format`}
            style={{ width: "80%", height: "90%" }}
          />
        </div>
        <div className="col-8" key={bookSearch.bookId}>
          <h4>{bookSearch.bookTitle}</h4>
          <p>{bookSearch.bookDetail}</p>
          <button
            className="btn btn-dark justify-content-end"
            onClick={handleClick}
          >
            Add to Library
          </button>
        </div>
      </div>

      <div className="row" style={{ height: "50px" }}></div>
      <div className="row g-2">
        <h4 className="text-center ">Don't take our words on it!</h4>
        <h6 className="text-center  ">Here's what our readers think</h6>
        {feeds.map((feed) => {
          return (
            <div className="col-4">
              <div className="card" style={{ width: "25rem" }}>
                <div className="card-header">
                  <h5 className="card-title">{feed.username}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{feed.time}</h6>
                </div>
                <div className="card-body">
                  <p className="card-text">{feed.post}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookDetails;
