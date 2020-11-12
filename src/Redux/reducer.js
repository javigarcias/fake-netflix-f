const {USER_ORDERS, LOGIN} = require("./types");


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
        default:
            return state
    }
}

export default reducer;