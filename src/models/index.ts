import { Models } from "@rematch/core";
import { notesList } from "./notes";
// import { notes } from "./notes";


export interface RootModel extends Models<RootModel>{
    // notes: typeof notes
    notesList: typeof notesList
}

export const models: RootModel = { notesList }