function createStore() {
  let state;
  // state tree
  // update
  // subscribe
  // get

  const getState = function () {
    return state;
  };

  return {
    getState,
  };
}

module.exports = createStore;
