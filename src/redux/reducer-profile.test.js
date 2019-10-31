import profileReducer, { addPost, deletePost } from "./reducer-profile";
import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

let state = {
    posts: [
        { id: "1", message: "Hi!", countLike: "12" },
        { id: "2", message: "Hi?", countLike: "2" },
        { id: "3", message: "J_J", countLike: "1" },
        { id: "4", message: "J_J", countLike: "3" }
    ]
};

it('length of posts should be incremented', () => {
    let action = addPost("village forever");
    

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
})

it('length of posts should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
})

it("after deleting length shouldn't be decrement if id is incorrect", () => {
    let action = deletePost(111);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
})