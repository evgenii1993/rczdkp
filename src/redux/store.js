import reducerProfile from "./reducer-profile";
import reducerDialog from "./reducer-dialog";
import reducerNavbar from "./reducer-navBar";


let score = {
    _state: {
        dialogsPage: {
            dialogs: [
                { id: "1", name: "Egor" },
                { id: "2", name: "Oksana" },
                { id: "3", name: "Galina" },
                { id: "4", name: "Oleg" }
            ],
            messages: [
                { id: "1", text: "Hi", user: "me" },
                { id: "2", text: "Hi!", user: "other" },
                { id: "3", text: "I'm smart man and i get everything", user: "me" }
            ],
            textMessage: ""
        },
        profilePage: {
            posts: [
                { id: "1", message: "Hi!", countLike: "12" },
                { id: "2", message: "Hi?", countLike: "2" },
                { id: "3",  message: "J_J", countLike: "1" },
                { id: "4", message: "J_J", countLike: "3" }
            ],
            textMessage: ""
        },
        navbarPage: {
            friends: [
                { id: "1", src: "http://img.playground.ru/images/9/1/1530819093_35674-digital_art-yellow_eyes-closeup-creature-skull-CGI-death-Darksiders-video_games-Darksiders_2-748x421.jpg" },
                { id: "2", src: "http://img.playground.ru/images/9/1/1530819093_35674-digital_art-yellow_eyes-closeup-creature-skull-CGI-death-Darksiders-video_games-Darksiders_2-748x421.jpg" },
                { id: "3", src: "http://img.playground.ru/images/9/1/1530819093_35674-digital_art-yellow_eyes-closeup-creature-skull-CGI-death-Darksiders-video_games-Darksiders_2-748x421.jpg" }
            ]
        }

    },
    _callSubscriber() {

    },
    getState() {
        return this._state;
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this.getState().profilePage = reducerProfile(this.getState().profilePage, action);
        this.getState().dialogsPage = reducerDialog(this.getState().dialogsPage, action);
        this.getState().navbarPage = reducerNavbar(this.getState().navbarPage, action);
        
        this._callSubscriber();
    }
}




window.score = score;
export default score;