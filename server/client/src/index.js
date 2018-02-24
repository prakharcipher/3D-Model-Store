import React from 'react'; // importing React
import ReactDOM from 'react-dom'; // importing React DOM
import { Provider } from 'react-redux'; // importing Provider from react-redux
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // importing Material UI for react styling
import App from './components/App'; // importing App Component
import reducers from './reducers'; // importing reducers

const store = createStore(reducers, {}, applyMiddleware(reduxThunk)); // Creating and initialising redux store

ReactDOM.render(
  // Passing store as props to Provider
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
