import React from 'react'

const NoteItem = (props) => {
  return (
    <div className='note-row'>
        <p className='note-num'>{props.number}</p>
        <p className='note-text'>{props.text}</p>
        {/* {console.log(props)} */}
    </div>
  )
}

export default NoteItem