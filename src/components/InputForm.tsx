import React from 'react'
import { useSelector } from 'react-redux'
import { RootState, store } from '../store'




const InputForm = () => {

  // Сбор state, reducers для добавления заметки через input 
  const notes = useSelector((state: RootState) => state.notesList)
  const { dispatch } = store

  // Состояние для input
  const state = { text: '' }

  // Обработчик введения текста в input
  const handleChange = event => {
    state.text = event.target.value
  }

  // Обработчик отправки данных из формы
  const handleSubmit = event => {
    event.preventDefault();
    dispatch.notesList.addNote(state.text);
    // Сброс текста в input после отправки данных
    (document.getElementById('MainInput') as HTMLInputElement).value = '';
    console.log(notes)
  }

  return (
    <form className='input-form' onSubmit={handleSubmit}>
      <input required className='form-control' id='MainInput' placeholder='Введите заметку' type="text" onChange={handleChange} />
      <button className='btn btn-outline-primary btn-sm' type='submit'>Добавить заметку</button>
    </form>
  )
}

export default InputForm