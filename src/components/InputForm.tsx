import React, { useState } from 'react'
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
    
        const handleChange = (event) => {
            state.text  = event.target.value
            console.log(state.text)
            console.log(typeof(state.text))
          }

        const handleSubmit = event => {
            event.preventDefault();
            dispatch.notesList.addNote(state.text)    
            console.log(store.getState())
            console.log(notesList.state)
            // dispatch.myTodos.addNote(myNote)

        }
    
  return (
    <form className='input-form' onSubmit={handleSubmit}>
        <input type="text"  onChange={handleChange} />
        <button type='submit'>send</button>
    </form>
  )
}

export default InputForm