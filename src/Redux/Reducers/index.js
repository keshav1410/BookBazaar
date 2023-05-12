import { combineReducers } from "redux";
import { booksReducer, selectBookReducer } from "./booksReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  book: selectBookReducer,
  user: userReducer,
});

export default rootReducer;
