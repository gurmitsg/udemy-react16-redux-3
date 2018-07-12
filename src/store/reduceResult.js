import * as actionType from "./actionTypes";

const initialState = {
    result: []
}

const reducer = (state = initialState, action) => {
    const { id,curCounter } = action

    switch (action.type) {
        case actionType.RESULT_STORE:
            const newResult = state.result.concat({ id: new Date(), val: curCounter })
            return {
                ...state,
                result: newResult,
            }
        case actionType.RESULT_DELETE:
            console.log("Deleting" + id)
            const delResult = state.result.filter(res => res.id !== id)
            return {
                ...state,
                result: delResult,
            }
        default:
            return state
    }
}

export default reducer;