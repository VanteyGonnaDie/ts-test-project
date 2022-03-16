import React from 'react'

const NoteItem = (props) => {
  return (
    <div>
        <p>{props.id}</p>
        <p>{props.text}</p>
    </div>
  )
}

export default NoteItem