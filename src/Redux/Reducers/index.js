import { combineReducers } from "redux";
import { booksReducer, selectBookReducer } from "./booksReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  book: selectBookReducer,
});

export default rootReducer;
