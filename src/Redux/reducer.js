const {SHOW_USER, LOGIN} = require("./types");


const initialState ={
    orders: [],
    users: []
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
        default:
            return state
    }
}

export default reducer;