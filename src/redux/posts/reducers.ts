import {
    ADD_POSTS
} from './actions';

const defaultState = {
    posts: []
}

const posts = (state = defaultState, action: {
    type: string,
    payload: any,
    function: any
}) => {
    switch(action.type){
        case ADD_POSTS:
            return {
                ...state,
                data: [...state.posts, action.payload]
            }
        default:
            return state;
    }
}

export default posts;