import React from 'react';
import { deleteNote, editNoteAction } from '../../redux/actions/notes'
import { useDispatch } from 'react-redux';

const NoteListItemComponent = ({note}) => {

  const dispatch = useDispatch();

  const removeNote = (note) => {
    dispatch(deleteNote(note), [])
  }

  const editNote = (note) => {
    dispatch(editNoteAction(note), []);
  }

  return (
    <div className="noteListItem active">
      <div className="noteHeading">
        <h3 className="cursor-pointer" onClick={() => {
          editNote(note)
        }}>{note.title}</h3>
        <button onClick={() => {
          removeNote(note)
        }}>x</button>
      </div>
      <p>
        {note.body}
      </p>
    </div>
  )
}

export default NoteListItemComponent;