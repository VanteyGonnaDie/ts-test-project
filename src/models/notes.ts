import { createModel } from "@rematch/core"
import { RootModel } from "."


export interface Note {
    id: number
    content: string
}

type NoteState ={
    notes: Note[]
}


export const notes = createModel<RootModel>()({
    state: {
        notes: [{id:0, content:''}],
    } as NoteState,
    reducers:{
        setNotes(state, notes){
            return {
                ...state,
                notes,
            }
        },
    },
    effects: (dispatch) => {
        const { notes } = dispatch
        return{
            
        }
    }
})