// combine all available reducers
const newsReducer = require("./reducers/news");
const eventsReducer = require("./reducers/events");

// via reducer you have the power to manipulate the state but always remember to return a new copy
// don't change in the state directly as the reducer is a pure function

const rootReducer = function (state, action) {
  return {
    news: newsReducer(state.news, action),
    events: eventsReducer(state.events, action),
  };
};

module.exports = rootReducer;
