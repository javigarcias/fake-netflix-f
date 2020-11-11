const {SHOW_USER, LOGIN, LOGOUT} = require("./types");


const initialState ={
    orders: [],
    user: {}
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case SHOW_USER:
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