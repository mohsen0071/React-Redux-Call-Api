import { ActionTypes } from "./../constants/action-types";
const initialState = {
    phones: [],
};
export const phoneReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PHONES:
            return { ...state, phones: payload };
        default:
            return state;
    }
};

export const selectedPhoneReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PHONE:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PHONE:
            return {};
        default:
            return state;
    }
};
