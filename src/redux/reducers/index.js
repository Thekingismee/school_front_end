import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import "react-tooltip/dist/react-tooltip.css";
import { history } from "../enhancers/middlewares/router";
import data from "./data";

export default combineReducers({
    router: connectRouter(history),
    data
});
