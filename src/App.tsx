import React, { useState } from 'react';
import InputForm from './components/InputForm';
import NoteList from './components/NoteList';
import './styles/custom.sass';
import { useSelector } from 'react-redux'
import { RootState, store } from './store';


const App = () => {

  // Сбор state, reducers для дальнейшего использования в dev меню
  const notes = useSelector((state: RootState) => state.notesList)
  const { dispatch } = store

  // Отслеживание состояния dev меню
  const [devMenu, setDevMenu] = useState(false)

  // Функции для тестирования
  const deleteNote = () => {
    dispatch.notesList.undo()
  }
  const addStaticNote = () => {
    dispatch.notesList.addNote('Тестовая заметка')
  }
  const addLastNote = () => {
    dispatch.notesList.redo()
  }

  // Обработка нажатий на клавиатуре / Можно вынести отдельным компонентом
  const handleKeyEvent = (event: React.KeyboardEvent) => {
    if (event.ctrlKey && event.key == 'z') {
      event.preventDefault();
      dispatch.notesList.undo()
      console.log(notes)
    }
    if (event.ctrlKey && event.key == 'y') {
      event.preventDefault();
      dispatch.notesList.redo()
      console.log('pressed ctrl+y')
      console.log(notes)
    }
  }



  return (
    <div className='container-fluid' tabIndex={-1} onKeyDown={handleKeyEvent}>
      <div className='app-wrapper'>
        <InputForm />
        <NoteList />
        <div className='dev-menu_wrapper'>
          <button className='btn btn-primary' onClick={() => { setDevMenu(!devMenu) }}>Тестовая среда</button>
          {devMenu &&
            <div className='dev-menu__btns'>
              <button className='btn btn-secondary' onClick={addLastNote}>Добавить последнюю заметку</button>
              <button className='btn btn-secondary' onClick={addStaticNote}>Добавить тестовую заметку</button>
              <button className='btn btn-secondary' onClick={deleteNote}>Удалить последнюю заметку</button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App;