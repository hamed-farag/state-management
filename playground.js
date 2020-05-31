const createStore = require("./stateManagement");
const rootReducer = require("./rootReducer");

const actionCreators = require("./actionCreators");

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actionCreators.addNews({ id: 1, title: "News 1" }));
store.dispatch(actionCreators.addEvents({ id: 1, title: "Events 1" }));
