export const ADD = 'ADD'
export const SUB = 'SUB'


export const do_add = (val=1) => {
    return {
        type: ADD,
        val: val
    }
}

export const do_sub = (val=1) => {
    return {
        type: SUB,
        val: val
    }
}

