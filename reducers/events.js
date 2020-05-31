const initialState = [];

const eventsReducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD_EVENTS":
      return [...state, action.payload];

    default:
      return state;
  }
};

module.exports = eventsReducer;
