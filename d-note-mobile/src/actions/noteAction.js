import { FETCH_NOTE, NEW_NOTE } from "./types";

export const createNote = note => ({
  type: NEW_NOTE,
  payload: note
});

export const fetchNotes = () => dispatch => {
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then(res => res.json())
  //   .then(notes =>
  //     dispatch({
  //       type: FETCH_NOTE,
  //       payload: notes
  //     })
  //   );
  let notes = [{content: 'Test Redux'}];
  dispatch({
          type: FETCH_NOTE,
          payload: notes
        })
};