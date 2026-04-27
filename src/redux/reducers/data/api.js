import {
    API_START,
    API_END,
    API_ERROR,
    ACCESS_DENIED,
    SET_TRAITER_DOSSIER_SALAFIN,
    CLEAR_TRAITER_DOSSIER_SALAFIN,
    SET_INSCRIPTIONS,
    UPDATE_INSCRIPTION,
    REMOVE_INSCRIPTION,
    SET_MESSAGES,
    UPDATE_MESSAGE,
    REMOVE_MESSAGE,
    SET_RENDEZVOUS,
    UPDATE_RENDEZVOUS,
    REMOVE_RENDEZVOUS,
    SET_CANDIDATURES,
    UPDATE_CANDIDATURE,
    REMOVE_CANDIDATURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    SET_CURRENT_USER
} from "../../actions/api";

const initialUser = (() => {
    try {
        return JSON.parse(localStorage.getItem('user'));
    } catch (e) {
        return null;
    }
})();

const initialState = {
    inscriptions: [],
    messages: [],
    rendezvous: [],
    candidatures: [],
    pagination: {},
    filters: {},
    isLoadingData: {},
    isError: false,
    error: null,
    authError: null,
    authErrors: {},
    user: initialUser,
    isAuthenticated: localStorage.getItem('authenticated') === 'true',
    data_TRAITER_DOSSIER_SALAFIN: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_INSCRIPTIONS:
            return {
                ...state,
                inscriptions: action.payload.data || action.payload,
                pagination: action.payload.pagination || {},
                filters: action.payload.filters || {},
                isError: false,
                error: null
            };

        case UPDATE_INSCRIPTION:
            return {
                ...state,
                inscriptions: state.inscriptions.map(item =>
                    item.id === action.payload.id
                        ? { ...item, ...action.payload }
                        : item
                )
            };

        case REMOVE_INSCRIPTION:
            return {
                ...state,
                inscriptions: state.inscriptions.filter(item => item.id !== action.payload)
            };

        case SET_MESSAGES:
            return {
                ...state,
                messages: action.payload.data || action.payload,
                pagination: action.payload.pagination || state.pagination,
                filters: action.payload.filters || state.filters,
                isError: false,
                error: null
            };

        case UPDATE_MESSAGE:
            return {
                ...state,
                messages: state.messages.map(item =>
                    item.id === action.payload.id
                        ? { ...item, ...action.payload }
                        : item
                )
            };

        case REMOVE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(item => item.id !== action.payload)
            };

        case SET_RENDEZVOUS:
            return {
                ...state,
                rendezvous: action.payload.data || action.payload,
                pagination: action.payload.pagination || state.pagination,
                filters: action.payload.filters || state.filters,
                isError: false,
                error: null
            };

        case UPDATE_RENDEZVOUS:
            return {
                ...state,
                rendezvous: state.rendezvous.map(item =>
                    item.id === action.payload.id
                        ? { ...item, ...action.payload }
                        : item
                )
            };

        case REMOVE_RENDEZVOUS:
            return {
                ...state,
                rendezvous: state.rendezvous.filter(item => item.id !== action.payload)
            };

        case SET_CANDIDATURES:
            return {
                ...state,
                candidatures: action.payload.data || action.payload,
                pagination: action.payload.pagination || state.pagination,
                filters: action.payload.filters || state.filters,
                isError: false,
                error: null
            };

        case UPDATE_CANDIDATURE:
            return {
                ...state,
                candidatures: state.candidatures.map(item =>
                    item.id === action.payload.id
                        ? { ...item, ...action.payload }
                        : item
                )
            };

        case REMOVE_CANDIDATURE:
            return {
                ...state,
                candidatures: state.candidatures.filter(item => item.id !== action.payload)
            };

        case SET_TRAITER_DOSSIER_SALAFIN:
            return {
                ...state,
                data_TRAITER_DOSSIER_SALAFIN: action.payload
            };

        case CLEAR_TRAITER_DOSSIER_SALAFIN:
            return {
                ...state,
                data_TRAITER_DOSSIER_SALAFIN: null
            };

        case LOGIN_REQUEST:
            return {
                ...state,
                authError: null,
                authErrors: {},
                isLoadingData: {
                    ...state.isLoadingData,
                    [`isLoadingData_${action.type}`]: true
                }
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user || action.payload,
                isAuthenticated: true,
                authError: null,
                authErrors: {},
                isError: false,
                error: null
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
                authError: action.error?.message || 'Erreur de connexion',
                authErrors: action.error?.response?.data?.errors || {},
                isError: true,
                error: action.error?.message || 'Erreur de connexion'
            };

        case LOGOUT:
            return {
                ...state,
                user: null,
                token: null,
                isAuthenticated: false,
                authError: null,
                authErrors: {},
                isError: false,
                error: null
            };

        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                authError: null,
                authErrors: {},
                isError: false,
                error: null
            };

        case API_START:
            return {
                ...state,
                isLoadingData: {
                    ...state.isLoadingData,
                    [`isLoadingData_${action.payload}`]: true
                },
                isError: false,
                error: null
            };

        case API_END:
            return {
                ...state,
                isLoadingData: {
                    ...state.isLoadingData,
                    [`isLoadingData_${action.payload}`]: false
                }
            };

        case API_ERROR:
            return {
                ...state,
                isError: true,
                error: action.error?.message || "Erreur API"
            };

        case ACCESS_DENIED:
            return {
                ...state,
                isError: true,
                error: "Accès refusé"
            };

        default:
            return state;
    }
};
