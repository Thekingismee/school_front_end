export const API = "API";
export const API_START = "API_START";
export const API_END = "API_END";
export const ACCESS_DENIED = "ACCESS_DENIED";
export const API_ERROR = "API_ERROR";

export const BACKEND_URL =
    process.env.NODE_ENV === "production"
        ? "/api"
        : "http://localhost:3300";
export const SET_ZOOM = "SET_ZOOM";

export const apiStart = label => ({
    type: API_START,
    payload: label
});

export const apiEnd = label => ({
    type: API_END,
    payload: label
});

export const accessDenied = url => ({
    type: ACCESS_DENIED,
    payload: {
        url
    }
});

export const apiError = error => ({
    type: API_ERROR,
    error
});

//*************************************************** SET ************************************************** */

/*********************************************************************/

// export const SEND_CUSTOM_FILE = "SEND_CUSTOM_FILE";
// export const SET_CUSTOM_FILE = "SET_CUSTOM_FILE";
// export const CLEAR_CUSTOM_FILE = "CLEAR_CUSTOM_FILE";



export const SEND_TRAITER_DOSSIER_SALAFIN = "SEND_TRAITER_DOSSIER_SALAFIN";
export const SET_TRAITER_DOSSIER_SALAFIN = "SET_TRAITER_DOSSIER_SALAFIN";
export const CLEAR_TRAITER_DOSSIER_SALAFIN = "CLEAR_TRAITER_DOSSIER_SALAFIN";


export function sendTraiterDossierSALAFIN(data) {
    return apiAction({
        url: `${BACKEND_URL}/boa/upload_salafine`,
        method: "POST",
        data: data,
        onSuccess: setTraiterDossierSALAFIN,
        onFailure: () => null,
        label: SEND_TRAITER_DOSSIER_SALAFIN
    });
}

export function setTraiterDossierSALAFIN(data) {
    return {
        type: SET_TRAITER_DOSSIER_SALAFIN,
        payload: data
    };
}
export function clearTraiterDossierSALAFIN(data) {
    return {
        type: CLEAR_TRAITER_DOSSIER_SALAFIN,
        payload: data
    };
}


function apiAction({
    url = "",
    method = "GET",
    privateAPI = true,
    data = null,
    accessToken = null,
    onSuccess = () => {},
    onFailure = () => {},
    label = "",
    headersOverride = null
}) {
    return {
        type: API,
        payload: {
            url,
            method,
            data,
            accessToken,
            onSuccess,
            onFailure,
            label,
            headersOverride,
            privateAPI
        }
    };
}
