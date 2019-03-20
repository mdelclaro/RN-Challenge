import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import ChallengeReducer from "./reducers/challengeReducer";
import EndpointReducer from "./reducers/endpointReducer";

const rootReducer = combineReducers({
  imagens: ChallengeReducer,
  endpoint: EndpointReducer
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
