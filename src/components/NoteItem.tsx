import React from 'react'

const NoteItem = (props) => {
  return (
    <div>
        <p>{props.number}</p>
        <p>{props.text}</p>
        {console.log(props)}
    </div>
  )
}

export default NoteItem