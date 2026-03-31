import { applyMiddleware } from "redux";

import router from "./router";
import apiMiddleware from "./api";

const middlewares = [
    router,
    apiMiddleware
];
export default applyMiddleware(...middlewares);
