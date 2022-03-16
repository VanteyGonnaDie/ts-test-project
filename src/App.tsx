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



  return (
      <div>
        <InputForm/>
        <p>
          {notesList.state}
        </p>
        {notes.map((text,index)=>
          <p key={index} >{text}</p>
          )}
      </div>
      
      )
    }
    
export default App;