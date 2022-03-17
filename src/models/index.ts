import { Models } from "@rematch/core";
import { notesList } from "./notes";


export interface RootModel extends Models<RootModel>{
    notesList: typeof notesList
}

export const models: RootModel = { notesList }