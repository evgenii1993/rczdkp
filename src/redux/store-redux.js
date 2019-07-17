import { createStore, combineReducers } from "redux";
import reducerProfile from "./reducer-profile";
import reducerDialog from "./reducer-dialog";
import reducerNavbar from "./reducer-navBar";

let reducers = combineReducers({
    profilePage: reducerProfile,
    dialogsPage: reducerDialog,
    navbarPage: reducerNavbar
});

let score = createStore(reducers);

export default score;