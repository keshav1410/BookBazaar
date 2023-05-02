import { ActionTypes } from "../Constants/actionTypes";

export const addBooks = (books) => {
  return {
    type: ActionTypes.ADD_BOOKS,
    payload: books,
  };
};

export const selectedBook = (book) => {
  return {
    type: ActionTypes.SELECTED_BOOK,
    payload: book,
  };
};
