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
    DELETE_USER_SUCCESS,

    //Remote API Actions
    ADD_NASA_API_START,
    ADD_NASA_API_SUCCESS, 
    ADD_MOVIE_API_START,
    ADD_MOVIE_API_SUCCESS,
    ADD_NEWS_API_START,
    ADD_NEWS_API_SUCCESS, 
    ADD_LOTTERY_API_START,
    ADD_LOTTERY_API_SUCCESS,
    ADD_USCALENDER_API_START,
    ADD_USCALENDER_API_SUCCESS,

    LOG_IN,
    LOG_OUT

} from '../actions';

const initialState = {
    isLoggedIn: false,
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

    // APIs
    lotteryAPI: {
        prizes: {
            values: [{value: ''}]
        },
        results: {
            values: [{value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}]
        }
    },
    movieAPI: [],
    nasaAPI: {},
    newsAPI: [],
    USCalenderAPI: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_API_START:
            return{
                ...state,
                isLoading: true,
                isLoggedIn: true
            }
        case GET_ALL_API_SUCCESS:
            return{
                ...state,
                posts: action.payload,
                isLoading: false,
                isLoggedIn: true
            }
        case GET_USER_POST_START:
            return{
                ...state,
                isLoading: true,
                isLoggedIn: true
            }
        case GET_USER_POST_SUCCESS:
            return{
                ...state,
                userPosts: action.payload,
                isLoggedIn: true
            }
        case ADD_POST_START:
            return{
                ...state,
                isLoading: true,
                isLoggedIn: true,
            }
        case ADD_POST_SUCCESS:
            return{
                ...state,
                isLoading: false,
                isLoggedIn: true,
            }
        case GET_USER_START:
            return{
                ...state,
                isLoading: true,
                isLoggedIn: true
            }
        case GET_USER_SUCCESS:
            return{
                ...state,
                user: action.payload,
                isLoading: false,
                isLoggedIn: true
            }
        case DELETE_USER_START:
            return{
                ...state,
                isLoading: true,
                isLoggedIn: true
            }
        case DELETE_USER_SUCCESS:
            return{
                ...state,
                isLoading: false,
                isLoggedIn: true
            }
        case DELETE_POST_START:
            return{
                ...state,
                isLoading: true,
                isLoggedIn: true
            }
        case DELETE_POST_SUCCESS:
            return{
                ...state,
                isLoading: false,
                isLoggedIn: true
            }
        case SET_USER_ID:
            return {
                ...state,
                user_id: action.payload,
                isLoading: false,
                isLoggedIn: true
            }




        case ADD_LOTTERY_API_START:
            return {
                ...state,
            }    
        case ADD_LOTTERY_API_SUCCESS:
            return {
                ...state,
                lotteryAPI: action.payload,
            } 
        case ADD_MOVIE_API_START:
            return {
                ...state,
            }    
        case ADD_MOVIE_API_SUCCESS:
            return {
                ...state,
                movieAPI: action.payload,
            }             
        case ADD_NASA_API_START:
            return {
                ...state,
            }    
        case ADD_NASA_API_SUCCESS:
            return {
                ...state,
                nasaAPI: action.payload,
            }    
        case ADD_NEWS_API_START:
            return {
                ...state,
            }    
        case ADD_NEWS_API_SUCCESS:
            return {
                ...state,
                newsAPI: action.payload,
            }
        case ADD_USCALENDER_API_START:
            return {
                ...state,
            }    
        case ADD_USCALENDER_API_SUCCESS:
            return {
                ...state,
                USCalenderAPI: action.payload,
            }

        case LOG_IN:
            return {
                ...state,
                isLoggedIn: action.payload
                }
        case LOG_OUT:
            return {
                ...state,
                isLoggedIn: false
               
            }
        default:
            return state;
    }
}