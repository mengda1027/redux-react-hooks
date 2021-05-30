import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { rateReducer } from "./reducers/RateReducer";

const rootReducer = combineReducers({
  rate: rateReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
