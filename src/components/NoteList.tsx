import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import NoteItem from './NoteItem'

const NoteList = () => {

  // Сбор state для построения массива заметок
  const notes = useSelector((state: RootState) => state.notesList)


  return (
    <div className='note-list__wrapper'>
      <div className='note-row'>
        <p className='note-num'>№</p>
        <p className='note-text'>Заметка</p>
      </div>
      {notes.curr.map((text, index) =>
        <NoteItem key={index} text={text} number={index + 1} />
      )}
    </div>
  )
}

export default NoteList