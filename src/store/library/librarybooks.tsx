import { combineReducers } from "redux";
import image12 from "../../assets/books/124943221.jpg";

const ADD_TO_LIBRARY_BOOK = "ADD_TO_LIBRARY_BOOK";

export function addToLibrary(librarybook) {
  return {
    type: "ADD_TO_LIBRARY_BOOK",
    librarybook,
  };
}

const defaultLibrary = [
  {
    bookId: 133,
    bookTitle: "King of Greed",
    bookAuthor: "Ana Huang",
    image: image12,
    bookDetail:
      "He has everything—a beautiful home, a beautiful wife, and more money than he could spend in a lifetime. But no matter how much he accumulates, he’s never satisfied. In his endless quest for more, he drives away the only person who saw him as enough. It isn’t until she’s gone that he realizes there may be more to life than riches and glory…but by then, it may be too late.",
  },
];

function librarybooks(state = defaultLibrary, action) {
  switch (action.type) {
    case ADD_TO_LIBRARY_BOOK:
      const bookToAdd = action.librarybook;
      const bookIdExists = state.some(
        (book) => book.bookId === bookToAdd.bookId
      );

      if (bookIdExists) {
        // Book with the same bookId already exists, return the current state
        return state;
      } else {
        return [
          ...state,
          {
            bookId: action.librarybook.bookId,
            bookTitle: action.librarybook.bookTitle,
            bookAuthor: action.librarybook.bookAuthor,
            image: action.librarybook.image,
            bookDetail: action.librarybook.bookDetail,
          },
        ];
      }
    default:
      return state;
  }
}

export default librarybooks;
