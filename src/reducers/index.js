import {
    SET_USER_ID,
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_ALL_API_START,
    GET_ALL_API_SUCCESS,
    GET_USER_POST_START,
    GET_USER_POST_SUCCESS,
    ADD_POST_START,
    ADD_POST_SUCCESS,
    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    DELETE_USER_START,
    DELETE_USER_SUCCESS
} from '../actions';

const initialState = {
    isLoading: false,
    token: '',
    error: '',
    userID: 0,
    posts: [],
    userPosts: [],
    user: {
        id: 0,
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: ''
    },
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_API_START:
            return{
                ...state,
                isLoading: true
            }
        case GET_ALL_API_SUCCESS:
            return{
                ...state,
                posts: action.payload,
                isLoading: false
            }
        case GET_USER_POST_START:
            return{
                ...state,
                isLoading: true
            }
        case GET_USER_POST_SUCCESS:
            return{
                ...state,
                userPosts: action.payload
            }
        case ADD_POST_START:
            return{
                ...state,
                isLoading: true
            }
        case ADD_POST_SUCCESS:
            return{
                ...state,
                userPosts: action.payload,
                isLoading: false
            }
        case GET_USER_START:
            return{
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_USER_SUCCESS:
            return{
                ...state,
                user: action.payload,
                isLoading: false,
                error: ''
            }
        case DELETE_USER_START:
            return{
                ...state,
                isLoading: true
            }
        case DELETE_USER_SUCCESS:
            return{
                ...state,
                isLoading: false
            }
        case DELETE_POST_START:
            return{
                ...state,
                isLoading: true,
            }
        case DELETE_POST_SUCCESS:
            return{
                ...state,
                userPosts: action.payload,
                isLoading: false,
                error: ''
            }
        case SET_USER_ID:
            return {
                ...state,
                user_id: action.payload,
                isLoading: false
            }
        
        default:
            return state;
    }
}