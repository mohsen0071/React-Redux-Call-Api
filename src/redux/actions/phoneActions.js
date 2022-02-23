import { ActionTypes } from "../constants/action-types";

export const setPhones = (phones) => {
    return {
        type: ActionTypes.SET_PHONES,
        payload: phones,
    };
};
export const selectedPhone = (phone) => {
    return {
        type: ActionTypes.SELECTED_PHONE,
        payload: phone,
    };
};
export const removeSelectedPhone = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PHONE,
    };
};
