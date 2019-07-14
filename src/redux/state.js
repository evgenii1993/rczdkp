let state = {
    dialogsPage: {
        dialogs: [
            {id: "1", name: "Egor"},
            {id: "2", name: "Oksana"},
            {id: "3", name: "Galina"},
            {id: "4", name: "Oleg"}
        ],
        messages: [
            {text: "Hi", user: "me"},
            {text: "Hi!", user: "other"},
            {text: "I'm smart man and i get everything", user: "me"}
        ]
    },
    profilePage: {
        posts: [
            {message: "Hi!", countLike: "12"},
            {message: "Hi?", countLike: "2"},
            {message: "J_J", countLike: "1"},
            {message: "J_J", countLike: "3"}
        ]
    },
    navbarPage: {
        friends: [
            {id: "1", src: "http://img.playground.ru/images/9/1/1530819093_35674-digital_art-yellow_eyes-closeup-creature-skull-CGI-death-Darksiders-video_games-Darksiders_2-748x421.jpg"},
            {id: "2", src: "http://img.playground.ru/images/9/1/1530819093_35674-digital_art-yellow_eyes-closeup-creature-skull-CGI-death-Darksiders-video_games-Darksiders_2-748x421.jpg"},
            {id: "3", src: "http://img.playground.ru/images/9/1/1530819093_35674-digital_art-yellow_eyes-closeup-creature-skull-CGI-death-Darksiders-video_games-Darksiders_2-748x421.jpg"}
        ]
    }

};

export let addPost = (message) => {
    let post = {
        message: message,
        countLike: 0
    };
    state.profilePage.posts.push(post);
}

export default state;