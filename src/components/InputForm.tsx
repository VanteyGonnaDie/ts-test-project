import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { notesList } from '../models/notes'
import { RootState, store } from '../store'
// import { notes } from '../models/notes'
import AppButton from './UI/Button/AppButton'
import AppInput from './UI/Input/AppInput'



const InputForm = () => {
  const  notes = useSelector((state: RootState) => state.notesList)
  const {dispatch} = store
  const state = { text: '' }
    
        const handleChange = event => {
            state.text  = event.target.value
            console.log(state.text)
            console.log(state)
          }

        const handleSubmit = event => {
            event.preventDefault();
            console.log(state)
            console.log(state.text)
            dispatch.notesList.addNote(state.text) 
            console.log(state)
            console.log(store.getState());
            (document.getElementById('MainInput') as HTMLInputElement).value = '';
            
            
        }
    console.log(state)
    
  return (
    <form className='input-form' onSubmit={handleSubmit}>
        <input id='MainInput' placeholder='Введите заметку' type="text"  onChange={handleChange} />
        <button type='submit'>Добавить заметку</button>
    </form>
  )
}

export default InputForm