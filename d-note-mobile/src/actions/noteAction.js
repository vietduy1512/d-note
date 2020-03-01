import { ADD_NEW_NOTE, UPDATE_NOTES } from "./types";
import { AsyncStorage } from 'react-native';
import { NOTE_LIST_DATA } from '../constants/common'

export const addNote = (content) => async (dispatch, getState) => {
  let notes = [...getState().notes.items];
  let newNote = { content: content };

  notes.push(newNote);
  await AsyncStorage.setItem(NOTE_LIST_DATA, JSON.stringify(notes));

  dispatch({
    type: ADD_NEW_NOTE,
    newNote: newNote
  })
};

export const fetchNotes = () => async (dispatch) => {
  let notes = JSON.parse(await AsyncStorage.getItem(NOTE_LIST_DATA));
  if (notes) {
    dispatch({
      type: UPDATE_NOTES,
      notes: notes
    })
  }
};

export const deleteNote = (index) => async (dispatch, getState) => {
  if (index < 0) return;
  let notes = [...getState().notes.items];

  notes.splice(index, 1);
  await AsyncStorage.setItem(NOTE_LIST_DATA, JSON.stringify(notes));

  dispatch({
    type: UPDATE_NOTES,
    notes: notes
  })
};