import { createStore, combineReducers } from "redux";
import reducerProfile from "./reducer-profile";
import reducerDialog from "./reducer-dialog";
import reducerNavbar from "./reducer-navBar";
import reducerFriend from "./reducer-friend";

let reducers = combineReducers({
    profilePage: reducerProfile,
    dialogsPage: reducerDialog,
    navbarPage: reducerNavbar,
    friendPage: reducerFriend
});

let score = createStore(reducers);

export default score;