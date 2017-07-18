import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Root from '../../Components/Root';

import '../../styles/app.css';
import '../../styles/flexboxgrid.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Root />
      </MuiThemeProvider>
    );
  }
}

export default App;
