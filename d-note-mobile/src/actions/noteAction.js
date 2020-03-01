import { FETCH_NOTE, NEW_NOTE } from "./types";
import { AsyncStorage } from 'react-native';


const NOTE_LIST_DATA = 'NOTE_LIST_DATA';

export const addNote = (content) => async (dispatch, getState) => {
  let notes = [...getState().notes.items];
  let newNote = { content: content };

  notes.push(newNote);
  await AsyncStorage.setItem(NOTE_LIST_DATA, JSON.stringify(notes));

  dispatch({
    type: NEW_NOTE,
    newNote: newNote
  })
};

export const fetchNotes = () => async (dispatch) => {
  let notes = JSON.parse(await AsyncStorage.getItem(NOTE_LIST_DATA));
  if (notes) {
    dispatch({
      type: FETCH_NOTE,
      notes: notes
    })
  }
};