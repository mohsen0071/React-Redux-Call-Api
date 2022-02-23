import { combineReducers } from "redux";
import { phoneReducer, selectedPhoneReducer } from "./phoneReducer";

const reducers = combineReducers({
    allPhones: phoneReducer,
    phone: selectedPhoneReducer,
});

export default reducers;
