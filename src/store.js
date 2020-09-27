import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { loadState, saveState } from './localStorage';

const middleware = [thunk];

const store = createStore(
  rootReducer,
  loadState(),
  compose(applyMiddleware(...middleware))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
