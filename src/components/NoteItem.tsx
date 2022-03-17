import React from 'react'

// Вывод данных из state переданного через props
const NoteItem = (props) => {
  return (
    <div className='note-row'>
      <p className='note-num'>{props.number}</p>
      <p className='note-text'>{props.text}</p>
    </div>
  )
}

export default NoteItem