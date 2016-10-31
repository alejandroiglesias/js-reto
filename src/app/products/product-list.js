import React, {Component} from 'react';
// import axios from 'axios';
// import {Tech} from '../techs/tech';
import {PropTypes, inject, observer} from 'mobx-react';

const styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  techs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

const ProductList = inject('products')(observer(
  class ProductList extends Component {
    render() {
      return (
        <div style={styles.container}>
          <h2 style={styles.h2}>
            Products
          </h2>
          <div style={styles.techs}>
            {this.props.products.map((product, i) => (
              <div key={i}>{product}</div>
            ))}
          </div>
        </div>
      );
    }
  }
));

ProductList.wrappedComponent.propTypes = {
  products: PropTypes.observableArray
};

export default ProductList;
