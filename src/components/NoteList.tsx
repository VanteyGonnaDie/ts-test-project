import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import NoteItem from './NoteItem'

const NoteList = () => {
  const  notes = useSelector((state: RootState) => state.notesList)


  return (
    <div>
        <div style={{display: 'flex'}}>
            <div>№</div>
            <div>Заметка</div>
        </div>
        {notes.map((text,index)=>
          <NoteItem key={index} text={text} number={index+1}/>
          )}
    </div>
  )
}

export default NoteList