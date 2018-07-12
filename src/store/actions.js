import * as actionType from './actionTypes'


export const do_add = (val=1) => {
    return {
        type: actionType.ADD,
        val: val
    }
}

export const do_sub = (val=1) => {
    return {
        type: actionType.SUB,
        val: val
    }
}

export const do_result_store = (curCounter) => {
    return {
        type: actionType.RESULT_STORE,
        curCounter: curCounter,
    }
}

export const do_result_delete = (del_id) => {
    return {
        type:actionType.RESULT_DELETE,
        id: del_id
    }
}

