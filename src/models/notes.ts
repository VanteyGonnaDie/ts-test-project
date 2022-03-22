import { createModel } from "@rematch/core"
import { RootModel } from "."

type DEF_STATE = {
    curr: Array<string>
    next?: string
    prev?: string
}

export const notesList = createModel<RootModel>()({
    state:{
        curr: [],
        next: '',
        prev: '',
    } as DEF_STATE,
    reducers: {
        addNote: (state, payload) => {
            state.curr.push(payload)
            state.prev = payload
            return {...state}
        },
        undo: (state) => {
            state.next = state.curr.pop()
            state.prev = '' 
            return {...state}
        },
        redo: (state) => {
            if(!state.next){
                return state
            }
            state.curr.push(state.next)
            return {...state}

        }
    },
})



