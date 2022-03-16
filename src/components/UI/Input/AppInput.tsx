import React from 'react'

const AppInput = (props) => {
  return (
    <div>
        <input {...props} placeholder='Введите текст заметки' type="number" />
    </div>
  )
}

export default AppInput