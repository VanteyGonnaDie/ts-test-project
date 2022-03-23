import { createModel } from "@rematch/core"
import { RootModel } from "."

type DEF_STATE = {
    curr: Array<string>
    next: Array<string>
    prev: Array<string>
}

export const notesList = createModel<RootModel>()({
    state: {
        curr: [],
        next: [],
        prev: [],
    } as DEF_STATE,
    reducers: {
        addNote: (state, payload) => {
            state.curr.push(payload)
            state.prev?.push(payload)
            return { ...state }
        },
        undo: (state) => {
            if (!state.prev) {
                return { ...state }
            }
            state.next.push(state.curr.pop()!)
            state.prev = [...state.curr]
            return { ...state }
        },
        redo: (state) => {
            if (state.next.length == 0) {
                return state
            }
            const temp_value = state.next.pop()!
            state.curr.push(temp_value)
            state.prev.push(temp_value)
            return { ...state }
        }
    },
})



