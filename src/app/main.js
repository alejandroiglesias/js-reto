import React, {Component} from 'react';
import {Header} from './header';

export class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
Main.propTypes = {
  children: React.PropTypes.node
};
