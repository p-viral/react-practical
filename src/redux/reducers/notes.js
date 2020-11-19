import * as type from '../types';

const INITIAL_STATE = {
  notes: [
    {
      id: 1,
      title: 'Testing Title',
      body: 'Testing body message'
    },
    {
      id: 2,
      title: 'Testing Title 2',
      body: 'Testing body message 2'
    },
    {
      id: 3,
      title: 'Testing Title 3',
      body: 'Testing body message 3'
    }
  ],
  selectedNote: {
    title: '',
    body: '',
  }
}

export default function notes(state = INITIAL_STATE, action) {
  switch(action.type) {        
    case(type.EDIT_SELECTED_NOTE):
      return {
        ...state,
        selectedNote: action.payload
      }
    case(type.UPSERT_SELECTED_NOTE):      
      if (action.payload.id === undefined) {        
        const newId = state.notes.length + 1;
        action.payload.id = newId;        
        return {
          ...state,
          notes: [...state.notes, action.payload],
          selectedNote: {
            title: '',
            body: '',
          }
        }
      } else {        
        return {
          ...state,
          notes: state.notes.map((note) => {
            if (note.id === action.payload.id) {
              note.title = action.payload.title;
              note.body = action.payload.body
            }
            return note;
          }),
          selectedNote: {
            title: '',
            body: '',
          }
        }
      }      
    case(type.DELETE_SELECTED_NOTE):    
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload.id),
        selectedNote: {
          title: '',
          body: '',
        }
      }
    case(type.REMOVE_SELECTED_NOTE):
      return {
        ...state,
        selectedNote: {
          title: '',
          body: '',
        }
      }
    default:
      return state;
  }
}
