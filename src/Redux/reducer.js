const {USER_ORDERS, LOGIN, LOGOUT, RENT} = require("./types");


const initialState ={
    orders: [],
    user: {},
    movie: {},
    
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case USER_ORDERS:
            return{
                ...state,
                orders: action.payload
            };
        case LOGIN:
            return{
                ...state,
                user: action.payload
            }
        case LOGOUT:
            return{
                ...state,
                user: {}
            }
        case RENT:
            return{
                ...state,
                movie: action.payload
            }
        default:
            return state
    }
}

export default reducer;