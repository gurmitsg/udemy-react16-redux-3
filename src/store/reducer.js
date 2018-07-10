import { ADD, SUB } from "./actions";

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case SUB:
            return {
                counter: state.counter - action.val
            }
        default:
            return state
    }
}

export default reducer;