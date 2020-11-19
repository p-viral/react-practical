import React from 'react';
import NoteListComponent from './notes/NoteListComponent';

const SidebarComponent = (props) => {
  return (
    <div className="sidebar">
      <NoteListComponent/>
    </div>
  )
}

export default SidebarComponent;