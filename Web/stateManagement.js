function createStore(reducer) {
  let state;
  // state tree
  // update
  // subscribe
  // get

  let listeners = [];

  // any one want to subscribe, if there is any updates happen in state, it will be notified
  const subscribe = (listenr) => {
    listeners.push(listenr);
    // for unsubscribe
    return () => listenr.filter((item) => item !== listenr);
  };

  const getState = function () {
    return state;
  };

  const dispatch = function (action) {
    // reducer will return a new copy of state
    state = reducer(state, action);
    // notifiy all subscribers
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}
