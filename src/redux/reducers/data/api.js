import { LOCATION_CHANGE } from "connected-react-router";
import {
    API_START,
    API_END,
    API_ERROR,
    ACCESS_DENIED,
    // SEND_TRAITER_DOSSIER_SALAFIN,
    SET_TRAITER_DOSSIER_SALAFIN,
    CLEAR_TRAITER_DOSSIER_SALAFIN
} from "../../actions/api";

const initialState = {};
export default (state = initialState, action) => {
    console.log("action type => ", action.type);
    switch (action.type) {
       
        case SET_TRAITER_DOSSIER_SALAFIN:
            return {
                ...state,
                data_TRAITER_DOSSIER_SALAFIN: action.payload
            };


            return state;
       

            // if (action.payload === SEND_TRAITER_DOSSIER_SALAFIN) {
            //     return {
            //         ...state,
            //         isLoadingData: {
            //             ...state.isLoadingData,
            //             isLoadingData_SEND_TRAITER_DOSSIER_SALAFIN: false
            //         },
            //         isError: false
            //     };
            // }

            return state;

        case API_ERROR:
        case ACCESS_DENIED:
            return {
                ...state,
                isError: true
            };

       
        case CLEAR_TRAITER_DOSSIER_SALAFIN:
            return {
                ...state,
                data_TRAITER_DOSSIER_SALAFIN: null
            };

        default:
            return state;
    }
};
