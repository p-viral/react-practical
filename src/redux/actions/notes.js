import * as type from '../types';

export const editNoteAction = (note) => {
  return {
    type: type.EDIT_SELECTED_NOTE,
    payload: note
  }
}

export const updateNoteAction = (note) => {
  return {
    type: type.UPSERT_SELECTED_NOTE,
    payload: note,
  }
}

export const deleteNote = (note) => {
  return {
    type: type.DELETE_SELECTED_NOTE,
    payload: note
  }
}

export const removeSelectedNoteAction = (note) => {
  return {
    type: type.REMOVE_SELECTED_NOTE,
    payload: note
  }
}