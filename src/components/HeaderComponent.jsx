import React from 'react';
import { useDispatch } from 'react-redux';
import { removeSelectedNoteAction } from '../redux/actions/notes';

const HeaderComponent = (props) => {

  const dispatch = useDispatch();

  return (
    <div className="header">
      <h2>G Notes</h2>
      <button onClick={(e) => {
        e.preventDefault()
        dispatch(removeSelectedNoteAction(true))
      }} className="btn" type="button">Add Note</button>
    </div>
  )
}

export default HeaderComponent;