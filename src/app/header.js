import React, {Component} from 'react';
import {Grid} from 'react-flexbox-grid';
import {Text, Toolbar} from 'rebass';

const styles = {
  text: {
    fontSize: '1.2rem'
  },
  toolbar: {
    backgroundColor: '#3A8DAB',
    borderBottom: '10px solid #34819C'
  }
};

export class Header extends Component {
  render() {
    return (
      <Toolbar style={styles.toolbar} p={3} pb={2}>
        <Grid>
          <Text style={styles.text}>Product Keeper</Text>
        </Grid>
      </Toolbar>
    );
  }
}
