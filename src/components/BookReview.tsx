// function BookbookReview() {
//   const clickHandler = () => alert("click");
//   return <button onClick={clickHandler}>Click Me!</button>;
// }

// export default BookbookReview;

// interface Props {
//   list: string;
//   //  heading: string;
// }
import React, { useState } from "react";
import Header from "./Header";

function BookReview() {
  let darkModeOn = true;
  const darkMode = "Dark Mode is On!";
  const lightMode = "Light Mode is On!";

  const [bookCount, setBookCount] = React.useState(0);

  function handleClick() {
    // darkModeOn = !darkModeOn;
    // if (darkModeOn == true) {
    //   alert(darkMode);
    // } else
    //   alert(lightMode);
    // }
    setBookCount(bookCount + 1);
  }

  const [bookInfo, setbookInfo] = useState([
    {
      title: "Fault in Our Stars",
      author: "John Green",
      review: "Some quick example text to display book review text ",
    },
    {
      title: "Rock Paper Scissors",
      author: "Freida",
      review: "Some quick example text to display book review text ",
    },
    {
      title: "Only One Left",
      author: "Riley",
      review: "Some quick example text to display book review text ",
    },
    {
      title: "The MidNight Library",
      author: "Carley",
      review: "Some quick example text to display book review text ",
    },
    {
      title: "On of Us is Next",
      author: "Mc",
      review: "Some quick example text to display book review text ",
    },
    {
      title: "On of Us is Back",
      author: "Mc",
      review: "Some quick example text to display book review text ",
    },
  ]);

  const skipClick = (title: string) => {
    const newBook = bookInfo.filter((item) => item.title !== title);
    setbookInfo(newBook);
  };

  return (
    <div>
      <br></br>
      <div className="row">
        <div className="col-11">
          <h1 style={{ textAlign: "center" }}> Book Recommendations</h1>
        </div>
        <div className="col-1 mt-2">
          <span className="btn btn-success">
            Library <span className="badge bg-primary">{bookCount}</span>
          </span>
        </div>
      </div>

      <br></br>
      <div className="row">
        {bookInfo.map((item, index) => {
          return (
            <div className="col-4 d-flex justify-content-center">
              <div key={item.title} className="card mb-3 w-75">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {item.author}
                  </h6>
                  <p className="card-text">{item.review}</p>
                  <button
                    onClick={handleClick}
                    className="btn btn-dark justify-content-end"
                  >
                    Add to Collection {/* Update state in circle */}
                  </button>
                  <span className="sr-only"> </span>
                  <button
                    onClick={() => skipClick(item.title)}
                    className="btn btn-dark justify-content-end"
                  >
                    Skip {/* Skip current card */}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookReview;
