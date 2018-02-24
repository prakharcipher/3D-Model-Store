import React, { Component } from 'react'; // importing React and Component class from react
import { AppBar } from 'material-ui';
import Store from './Store';

class App extends Component {
  // Creating class component App
  render() {
    return (
      <div>
        {/* Returning the AppBar and Store Component as children of App */}
        <AppBar title="3D Models Store" />
        <Store />
      </div>
    );
  }
}

export default App;
