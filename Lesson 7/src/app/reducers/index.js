
import { combineReducers } from "redux";

import comments from "./commentsReducer"
import posts from "./postsReducer"
import users from "./usersReducer"

export default combineReducers({
    comments: comments,
    posts: posts,
    users: users,
})