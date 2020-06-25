export const ADD_POSTS:string = "ADD_POSTS";

export const addPosts = (posts: Array<object>) => {
    return {
        type: ADD_POSTS,
        payload: posts
    }
}