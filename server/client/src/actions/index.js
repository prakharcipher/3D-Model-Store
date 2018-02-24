import axios from 'axios';
import { FETCH_CATEGORIES } from './types'; // importing Fetch Category type

// defining and exporting the fetchCategories function as action
export const fetchCategories = () => async dispatch => {
  // fetching the 'categories' collection array from the backend api
  const res = await axios.get('/api');

  // dispatching the data for type Fetch Categories
  dispatch({ type: FETCH_CATEGORIES, payload: res.data });
};
