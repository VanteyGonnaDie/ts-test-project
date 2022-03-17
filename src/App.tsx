import React, { useState } from 'react';
import InputForm from './components/InputForm';
import NoteList from './components/NoteList';
import './styles/custom.sass';
import { useSelector } from 'react-redux'
import { RootState, store } from './store';


const App = () => {
  const  notes = useSelector((state: RootState) => state.notesList)
  const {dispatch} = store
  const [devMenu, setDevMenu] = useState(false)
  const deleteNote = () =>{
    dispatch.notesList.deleteNote()
  }
  const addStaticNote = () =>{
    dispatch.notesList.addNote('Тестовая заметка')
  }
  const addLastNote = () =>{
    dispatch.notesList.addNote(notes[notes.length - 1])
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



  return (
      <div className='container-fluid' onKeyDown={handleKeyEvent}>
        <InputForm/>
        <NoteList/>
        <div className='dev-menu_wrapper'>
          <button className='btn btn-primary' onClick={()=> {setDevMenu(!devMenu)}}>Тестовая среда</button>
          {devMenu && 
            <div className='dev-menu__btns'>
              <button className='btn btn-secondary' onClick={addLastNote}>Добавить последнюю заметку</button>
              <button className='btn btn-secondary' onClick={addStaticNote}>Добавить тестовую заметку</button>
              <button className='btn btn-secondary' onClick={deleteNote}>Удалить последнюю заметку</button>
            </div>
           }
        </div>
      </div>

      
      )
    }
    
export default App;