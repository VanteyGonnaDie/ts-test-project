import { createModel } from "@rematch/core"
import { RootModel } from "."

// export interface NoteModel {
//     text: string
// }

// type NoteState = {
//     notes: NoteModel[]
// }

export const notesList = createModel<RootModel>()({
    state: [''],
    reducers: {
        addNote(state, payload){
        return [...state, payload]
        }
    },
},)



