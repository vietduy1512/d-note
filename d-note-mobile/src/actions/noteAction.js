import { FETCH_NOTE, NEW_NOTE } from "./types";
import { AsyncStorage } from 'react-native';

const NOTE_LIST_DATA = 'NOTE_LIST_DATA';

export const createNote = note => ({
  type: NEW_NOTE,
  payload: note
});

export const fetchNotes = () => async (dispatch) => {
  let notes = JSON.parse(await AsyncStorage.getItem(NOTE_LIST_DATA));
  dispatch({
    type: FETCH_NOTE,
    payload: notes
  })
};