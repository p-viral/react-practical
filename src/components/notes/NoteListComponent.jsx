import React from 'react';
import NoteListItemComponent from './NoteListItemComponent';
import { useSelector } from 'react-redux';


const NoteListComponent = (props) => {
  // const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.notes);

  return (
    <>
      {notes && notes.map((note, index) => (
        <NoteListItemComponent note={note} key={index} index={index}/>
      ))}      
    </>
  )
}

export default NoteListComponent;