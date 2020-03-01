import { ADD_NEW_NOTE, UPDATE_NOTES } from "../actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_NOTE:
      return {
        ...state,
        items: [...state.items, action.newNote]
      };
    case UPDATE_NOTES:
      return {
        ...state,
        items: action.notes
      };
    default:
      return state;
  }
}
