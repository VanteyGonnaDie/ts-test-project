import { createModel } from "@rematch/core"
import { RootModel } from "."

export const notesList = createModel<RootModel>()({
    state: ['Первая заметка'],
    reducers: {
        addNote(state, payload){
        return [...state, payload]
        },
        deleteNote(state){
            state.pop()
            return [...state]
        }
    },
},)



