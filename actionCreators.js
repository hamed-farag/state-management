const addNews = function (news) {
  // action object (Action Type Object)
  return {
    type: "ADD_NEWS",
    payload: news,
  };
};

const addEvents = function (events) {
  // action object (Action Type Object)
  return {
    type: "ADD_EVENTS",
    payload: events,
  };
};

exports.addNews = addNews;
exports.addEvents = addEvents;
