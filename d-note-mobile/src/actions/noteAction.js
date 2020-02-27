import { FETCH_NOTE, NEW_NOTE } from "./types";

export const createNote = note => ({
  type: NEW_NOTE,
  payload: note
});

export const fetchNotes = notes => ({
  type: FETCH_NOTE,
  payload: notes
});