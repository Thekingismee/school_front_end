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
        privateAPI,
        withCredentials = false,
        csrf = false
    } = action.payload;
    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";
    const cnxAccessToken = localStorage.getItem("token");

    // Ensure baseURL is set for any other generic axios use if needed, but avoid mutating global state unnecessarily per request
    if (!axios.defaults.baseURL) {
        axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "";
    }

    if (label) {
        dispatch(apiStart(label));
    }

    const executeRequest = async () => {
        let requestHeaders = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            ...headers
        };

        if (cnxAccessToken && privateAPI) {
            requestHeaders["Authorization"] = `Bearer ${cnxAccessToken}`;
        }

        if (csrf) {
            const apiBaseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:8000';
            await axios.get(`${apiBaseUrl}/sanctum/csrf-cookie`, {
                withCredentials: true,
                headers: { "Accept": "application/json" }
            });

            // Get CSRF token from cookies and set it for axios
            // Note: This requires the frontend and backend to share the same top-level domain
            const csrfToken = document.cookie
                .split('; ')
                .find(row => row.startsWith('XSRF-TOKEN='))
                ?.split('=')[1];

            if (csrfToken) {
                requestHeaders['X-XSRF-TOKEN'] = decodeURIComponent(csrfToken);
            }
        }

        return axios.request({
            url,
            method,
            headers: requestHeaders,
            withCredentials,
            [dataOrParams]: data
        });
    };

    executeRequest()
        .then(({ data }) => {
            dispatch(onSuccess(data));
        })
        .catch(error => {
            dispatch(apiError(error));
            const failureAction = onFailure(error);
            if (failureAction && failureAction.type) {
                dispatch(failureAction);
            }

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
