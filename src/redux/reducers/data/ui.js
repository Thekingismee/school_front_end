import {  SET_ZOOM } from "../../actions/api";

const initialState = {
    zoom: "100%",
    prevZoom: "100%"
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_ZOOM:
            if (payload === state.zoom)
                return {
                    ...state
                };
            else
                return {
                    ...state,
                    prevZoom: state.zoom,
                    zoom: payload
                };

        default:
            return state;
    }
};
