import { FETCH_NOTE, NEW_NOTE } from "../actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTE:
      return {
        ...state,
        items: action.notes
      };
    case NEW_NOTE:
      return {
        ...state,
        items: [...state.items, action.newNote]
      };
    default:
      return state;
  }
}
