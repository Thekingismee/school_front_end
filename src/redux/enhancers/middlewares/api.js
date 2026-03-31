// inspired by https://leanpub.com/redux-book
import axios from "axios";
import {
    accessDenied,
    apiError,
    apiStart,
    apiEnd,
    API,
} from "../../actions/api";
import { push, replace } from "connected-react-router";
import { toast } from "react-toastify";

const apiMiddleware = ({ dispatch }) => next => action => {
    try {
        next(action);
    } catch (e) {
        console.log("Action", e, action);
        return;
    }

    if (!action || action.type !== API) return;
    console.log(action);
    const {
        url,
        method,
        data,
        accessToken = "",
        onSuccess,
        onFailure,
        label,
        headers,
        privateAPI
    } = action.payload;
    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

    const cnxAccessToken = localStorage.getItem("token");

    // axios default configs
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    //axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

    if (cnxAccessToken && privateAPI) {
        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${cnxAccessToken}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }

    if (label) {
        dispatch(apiStart(label));
    }

    axios
        .request({
            url,
            method,
            headers,
            [dataOrParams]: data
        })
        .then(({ data }) => {
            dispatch(onSuccess(data));
        })
        .catch(error => {
            dispatch(apiError(error));
            onFailure(error);

        
                if (error.response && error.response.status === 403) {
                dispatch(accessDenied(window.location.pathname));
            }
        })
        .finally(() => {
            if (label) {
                dispatch(apiEnd(label));
            }
        });
};

export default apiMiddleware;
