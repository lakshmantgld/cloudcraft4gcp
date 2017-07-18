// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import FiberManualRecord from 'material-ui-icons/FiberManualRecord';

const styleSheet = createStyleSheet('SimpleBottomNavigation', {
  root: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

class SimpleBottomNavigation extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const classes = this.props.classes;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <BottomNavigation value={value} onChange={this.handleChange} showLabels id="footer">
          <div className="row" style={{paddingTop: '14px'}}>
            <div className="col-md-4">
              <span id="toolbarspanText">Toolbar Component</span>
            </div>
            <div className="col-md-8">
              <BottomNavigationButton icon={<FiberManualRecord />} style={{color: 'white'}}/>
              <BottomNavigationButton icon={<FiberManualRecord />} style={{color: 'white'}}/>
              <BottomNavigationButton icon={<FiberManualRecord />} style={{color: 'white'}}/>
              <BottomNavigationButton icon={<FiberManualRecord />} style={{color: 'white'}}/>
              <BottomNavigationButton icon={<FiberManualRecord />} style={{color: 'white'}}/>
              <BottomNavigationButton icon={<FiberManualRecord />} style={{color: 'white'}}/>
              <BottomNavigationButton icon={<FiberManualRecord />} style={{color: 'white'}}/>
              <BottomNavigationButton icon={<FiberManualRecord />} style={{color: 'white'}}/>
              <BottomNavigationButton icon={<FiberManualRecord />} style={{color: 'white'}}/>
            </div>
          </div>
        </BottomNavigation>
      </div>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SimpleBottomNavigation);
