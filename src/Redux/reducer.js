import SHOW_USER from './types';

const initialState ={
    orders: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case SHOW_USER:
            return{
                ...state,
                movies: action.payload
            }
        default:
            return state
    }
}