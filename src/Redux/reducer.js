const {USER_ORDERS, LOGIN, LOGOUT} = require("./types");


const initialState ={
    orders: [],
    user: {}
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
        default:
            return state
    }
}

export default reducer;