import { ActionTypes } from "../Constants/actionTypes";

const initialState = {
  books: [
    {
      bookID: 1,
      title: "Ikigai",
      description:
        "The Japanese secret to a long and happy life [Hardcover] García, Héctor and Miralles, Francesc Hardcover – 27 September 2017",
      authorName: "Francesc Miralles",
      price: 349,
      quantity: 0,
      isbn: "178633089X",
      bookImage: "ikigai.jpg",
      userID: 2,
      categoryID: null,
      rating: 4.6,
    },
  ],
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_BOOKS:
      return state;
    default:
      return state;
  }
};
