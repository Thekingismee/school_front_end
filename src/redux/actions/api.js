export const API = "API";
export const API_START = "API_START";
export const API_END = "API_END";
export const ACCESS_DENIED = "ACCESS_DENIED";
export const API_ERROR = "API_ERROR";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
export const FETCH_INSCRIPTIONS = "FETCH_INSCRIPTIONS";
export const SET_INSCRIPTIONS = "SET_INSCRIPTIONS";
export const UPDATE_INSCRIPTION = "UPDATE_INSCRIPTION";
export const REMOVE_INSCRIPTION = "REMOVE_INSCRIPTION";
export const UPDATE_INSCRIPTION_STATUS = "UPDATE_INSCRIPTION_STATUS";
export const DELETE_INSCRIPTION = "DELETE_INSCRIPTION";
export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const SET_MESSAGES = "SET_MESSAGES";
export const UPDATE_MESSAGE = "UPDATE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const UPDATE_MESSAGE_STATUS = "UPDATE_MESSAGE_STATUS";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const FETCH_RENDEZVOUS = "FETCH_RENDEZVOUS";
export const SET_RENDEZVOUS = "SET_RENDEZVOUS";
export const UPDATE_RENDEZVOUS = "UPDATE_RENDEZVOUS";
export const REMOVE_RENDEZVOUS = "REMOVE_RENDEZVOUS";
export const UPDATE_RENDEZVOUS_STATUS = "UPDATE_RENDEZVOUS_STATUS";
export const DELETE_RENDEZVOUS = "DELETE_RENDEZVOUS";
export const FETCH_CANDIDATURES = "FETCH_CANDIDATURES";
export const SET_CANDIDATURES = "SET_CANDIDATURES";
export const UPDATE_CANDIDATURE = "UPDATE_CANDIDATURE";
export const REMOVE_CANDIDATURE = "REMOVE_CANDIDATURE";
export const UPDATE_CANDIDATURE_STATUS = "UPDATE_CANDIDATURE_STATUS";
export const DELETE_CANDIDATURE = "DELETE_CANDIDATURE";

export const BACKEND_URL =
    process.env.NEXT_PUBLIC_API_URL || process.env.REACT_APP_BASE_URL ||
    (process.env.NODE_ENV === "production" ? "/api" : "http://localhost:8000/api");
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

export function loginRequest() {
    return {
        type: LOGIN_REQUEST
    };
}

export function loginSuccess(data) {
    if (data?.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
    }
    localStorage.setItem('authenticated', 'true');
    return {
        type: LOGIN_SUCCESS,
        payload: data
    };
}

export function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        error
    };
}

export function logoutUser() {
    return apiAction({
        url: `${process.env.REACT_APP_BASE_URL || 'http://localhost:8000'}/logout`,
        method: "POST",
        privateAPI: false,
        withCredentials: true,
        csrf: true,
        onSuccess: () => {
            localStorage.removeItem('authenticated');
            localStorage.removeItem('user');
            return { type: LOGOUT };
        },
        onFailure: () => {
            localStorage.removeItem('authenticated');
            localStorage.removeItem('user');
            return { type: LOGOUT };
        },
        label: 'LOGOUT'
    });
}

export function setCurrentUser(user) {
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    return {
        type: SET_CURRENT_USER,
        payload: user
    };
}

export function fetchCurrentUser() {
    return apiAction({
        url: `${process.env.REACT_APP_BASE_URL || 'http://localhost:8000'}/api/user`,
        method: "GET",
        privateAPI: true,
        withCredentials: true,
        onSuccess: setCurrentUser,
        onFailure: loginFailure,
        label: FETCH_CURRENT_USER
    });
}

export function loginUser(data) {
    return apiAction({
        url: `${process.env.REACT_APP_BASE_URL || 'http://localhost:8000'}/login`,
        method: "POST",
        data,
        privateAPI: false,
        withCredentials: true,
        csrf: true,
        onSuccess: (data) => {
            // Stocker le token Sanctum
            if (data.token) {
                localStorage.setItem('token', data.token);
            }
            return loginSuccess(data);
        },
        onFailure: loginFailure,
        label: LOGIN_REQUEST
    });
}

export function fetchInscriptions(params = {}) {
    return apiAction({
        url: `${BACKEND_URL}/admin/inscriptions`,
        method: "GET",
        data: params,
        withCredentials: true,  // <-- Ajouter ceci
        csrf: true,             // <-- Et ceci
        onSuccess: setInscriptions,
        onFailure: () => null,
        label: FETCH_INSCRIPTIONS
    });
}

export function setInscriptions(data) {
    return {
        type: SET_INSCRIPTIONS,
        payload: data
    };
}

export function updateInscription(data) {
    return {
        type: UPDATE_INSCRIPTION,
        payload: data
    };
}

export function removeInscription(id) {
    return {
        type: REMOVE_INSCRIPTION,
        payload: id
    };
}

export function updateInscriptionStatus(id, statut, note_admin = null) {
    return apiAction({
        url: `${BACKEND_URL}/admin/inscriptions/${id}/status`,
        method: "PATCH",
        data: { statut, note_admin },
        onSuccess: updateInscription,
        onFailure: () => null,
        label: UPDATE_INSCRIPTION_STATUS
    });
}

export function deleteInscription(id) {
    return apiAction({
        url: `${BACKEND_URL}/admin/inscriptions/${id}`,
        method: "DELETE",
        onSuccess: () => removeInscription(id),
        onFailure: () => null,
        label: DELETE_INSCRIPTION
    });
}

export function fetchMessages(params = {}) {
    return apiAction({
        url: `${BACKEND_URL}/admin/messages`,
        method: "GET",
        data: params,
        onSuccess: setMessages,
        onFailure: () => null,
        label: FETCH_MESSAGES
    });
}

export function setMessages(data) {
    return {
        type: SET_MESSAGES,
        payload: data
    };
}

export function updateMessage(data) {
    return {
        type: UPDATE_MESSAGE,
        payload: data
    };
}

export function removeMessage(id) {
    return {
        type: REMOVE_MESSAGE,
        payload: id
    };
}

export function updateMessageStatus(id, statut, reponse_admin = null) {
    return apiAction({
        url: `${BACKEND_URL}/admin/messages/${id}`,
        method: "PATCH",
        data: { statut, reponse_admin },
        onSuccess: updateMessage,
        onFailure: () => null,
        label: UPDATE_MESSAGE_STATUS
    });
}

export function deleteMessage(id) {
    return apiAction({
        url: `${BACKEND_URL}/admin/messages/${id}`,
        method: "DELETE",
        onSuccess: () => removeMessage(id),
        onFailure: () => null,
        label: DELETE_MESSAGE
    });
}

export function fetchRendezvous(params = {}) {
    return apiAction({
        url: `${BACKEND_URL}/admin/rendezvous`,
        method: "GET",
        data: params,
        onSuccess: setRendezvous,
        onFailure: () => null,
        label: FETCH_RENDEZVOUS
    });
}

export function setRendezvous(data) {
    return {
        type: SET_RENDEZVOUS,
        payload: data
    };
}

export function updateRendezvous(data) {
    return {
        type: UPDATE_RENDEZVOUS,
        payload: data
    };
}

export function removeRendezvous(id) {
    return {
        type: REMOVE_RENDEZVOUS,
        payload: id
    };
}

export function updateRendezvousStatus(id, statut, note_admin = null) {
    return apiAction({
        url: `${BACKEND_URL}/admin/rendezvous/${id}`,
        method: "PATCH",
        data: { statut, note_admin },
        onSuccess: updateRendezvous,
        onFailure: () => null,
        label: UPDATE_RENDEZVOUS_STATUS
    });
}

export function deleteRendezvous(id) {
    return apiAction({
        url: `${BACKEND_URL}/admin/rendezvous/${id}`,
        method: "DELETE",
        onSuccess: () => removeRendezvous(id),
        onFailure: () => null,
        label: DELETE_RENDEZVOUS
    });
}

export function fetchCandidatures(params = {}) {
    return apiAction({
        url: `${BACKEND_URL}/admin/candidatures`,
        method: "GET",
        data: params,
        onSuccess: setCandidatures,
        onFailure: () => null,
        label: FETCH_CANDIDATURES
    });
}

export function setCandidatures(data) {
    return {
        type: SET_CANDIDATURES,
        payload: data
    };
}

export function updateCandidature(data) {
    return {
        type: UPDATE_CANDIDATURE,
        payload: data
    };
}

export function removeCandidature(id) {
    return {
        type: REMOVE_CANDIDATURE,
        payload: id
    };
}

export function updateCandidatureStatus(id, statut, note_recruteur = null) {
    return apiAction({
        url: `${BACKEND_URL}/admin/candidatures/${id}`,
        method: "PATCH",
        data: { statut, note_recruteur },
        onSuccess: updateCandidature,
        onFailure: () => null,
        label: UPDATE_CANDIDATURE_STATUS
    });
}

export function deleteCandidature(id) {
    return apiAction({
        url: `${BACKEND_URL}/admin/candidatures/${id}`,
        method: "DELETE",
        onSuccess: () => removeCandidature(id),
        onFailure: () => null,
        label: DELETE_CANDIDATURE
    });
}

function apiAction({
    url = "",
    method = "GET",
    privateAPI = true,
    data = null,
    accessToken = null,
    onSuccess = () => { },
    onFailure = () => { },
    label = "",
    headers = null,
    withCredentials = false,
    csrf = false
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
            privateAPI,
            withCredentials,
            csrf
        }
    };
}
