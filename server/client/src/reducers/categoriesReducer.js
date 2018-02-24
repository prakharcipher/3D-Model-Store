import { FETCH_CATEGORIES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      // returning data from action
      return action.payload;
    default:
      // returning the default state if no action
      return state;
  }
}
