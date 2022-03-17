import React from 'react'
import { useSelector } from 'react-redux'
import { RootState, store } from '../store'




const InputForm = () => {
  const  notes = useSelector((state: RootState) => state.notesList)
  const {dispatch} = store
  const state = { text: '' }
    
        const handleChange = event => {
            state.text  = event.target.value
          }

        const handleSubmit = event => {
            event.preventDefault();
            dispatch.notesList.addNote(state.text);
            (document.getElementById('MainInput') as HTMLInputElement).value = '';
            console.log(notes)
        }
    
  return (
    <form className='input-form' onSubmit={handleSubmit}>
        <input className='form-control' id='MainInput' placeholder='Введите заметку' type="text"  onChange={handleChange} />
        <button className='btn btn-outline-primary btn-sm' type='submit'>Добавить заметку</button>
    </form>
  )
}

export default InputForm