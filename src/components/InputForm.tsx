import React from 'react'
import AppButton from './UI/Button/AppButton'
import AppInput from './UI/Input/AppInput'

const InputForm = () => {

    const addNewNote = (e) =>{
        e.preventDefault()
    }

  return (
    <form className='input-form'>
        <AppInput/>
        <AppButton/>
    </form>
  )
}

export default InputForm