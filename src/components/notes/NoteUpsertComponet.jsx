import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateNoteAction } from '../../redux/actions/notes';
import { isEqual } from 'lodash';

const NoteUpsertComponent = () => {
  const note = useSelector(state => state.notes.selectedNote);
  const dispatch = useDispatch();
  const [localNote, setLocalNote] = useState({
    id: '',
    title: '',
    body: '',
  })

  const handleChange = (e) => {    
    setLocalNote({
      ...localNote,
      [e.target.name]: e.target.value
    })
  }
  const prevLocalNote = useRef(localNote);
  useEffect(() => {  
    if (!isEqual(localNote, prevLocalNote.current)) {
      setLocalNote(localNote);      
    } else if(!isEqual(localNote, note)) {
      setLocalNote(note);      
    }    
    prevLocalNote.current = localNote;
  }, [localNote, note])

  return (
    <div className="addNote">      
      <div className="addNoteContainer">
      <h3>Note</h3>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(updateNoteAction(localNote))
      }}>        
      <div className="formGroup">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" value={localNote.title} onChange={handleChange} />
      </div>
      <div className="formGroup">
        <label htmlFor="body">Body:</label>
        <textarea name="body" value={localNote.body} onChange={handleChange}/>
      </div>
      <input type="submit" className="btn" />
      </form>
      </div>
    </div>
  )
}

export default NoteUpsertComponent;