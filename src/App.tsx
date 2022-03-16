import React, { useEffect, useState } from 'react';
import InputForm from './components/InputForm';
import NoteList from './components/NoteList';
import './styles/custom.sass';
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Dispatch, RootState, store } from './store';
import AppButton from './components/UI/Button/AppButton';
import NoteItem from './components/NoteItem';
import { notesList } from './models/notes';


const App = () => {
  const  notes = useSelector((state: RootState) => state.notesList)
  const {dispatch} = store
  const deleteNote = () =>{
    dispatch.notesList.deleteNote()
  }
  const handleKeyEvent = (event: React.KeyboardEvent) => {
    if(event.ctrlKey && event.key == 'z'){
      event.preventDefault();
      dispatch.notesList.deleteNote()
      console.log(notes)
    }
    if(event.ctrlKey && event.key == 'y'){
      event.preventDefault();
      dispatch.notesList.addNote(notes[notes.length - 1])
      console.log('pressed ctrl+y')
      console.log(notes)
    }
  }
  // const log = (e: KeyboardEvent): void => {
  //   console.log(e.key);
  // }


  return (
      <div onKeyDown={handleKeyEvent}>
        <InputForm/>
        <NoteList/>
        <button onClick={deleteNote}>delete last</button>
      </div>
      
      )
    }
    
export default App;