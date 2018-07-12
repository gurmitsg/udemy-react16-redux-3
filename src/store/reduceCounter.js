import * as actionType from "./actionTypes";

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    const { val } = action

    switch (action.type) {
        case actionType.ADD:
            return {
                ...state,
                counter: state.counter + val
            }
        case actionType.SUB:
            return {
                ...state,
                counter: state.counter - val
            }
        default:
            return state
    }
}

export default reducer;