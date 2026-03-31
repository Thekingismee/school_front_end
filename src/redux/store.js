import { createStore } from "redux";

import _reducer from "./reducers/index";
import _enhancer from "./enhancers";

const store = (
    reducer = _reducer,
    preloadedState = undefined,
    enhancer = _enhancer
) => createStore(reducer, preloadedState, enhancer);
export default store;
