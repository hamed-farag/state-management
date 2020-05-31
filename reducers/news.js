const initialState = [];

const newsReducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD_NEWS":
      return [...state, action.payload];

    default:
      return state;
  }
};

module.exports = newsReducer;
