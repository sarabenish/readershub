import { combineReducers } from "redux";
import feeds from "../store/feed/feeds";
import books from "../store/book/books";
import librarybooks from "../store/library/librarybooks";

const rootReducer = combineReducers({
  feed: feeds,
  book: books,
  librarybook: librarybooks,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
