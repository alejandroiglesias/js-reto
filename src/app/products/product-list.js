import React, {Component} from 'react';
import {PropTypes, inject, observer} from 'mobx-react';
import {Base, InlineForm} from 'rebass';
import {Box, Flex} from 'reflexbox';
import Icon from 'react-geomicons';

const styles = {
  search: {
    button: {
      padding: '7px 9px'
    }
  }
};

const ProductList = inject('products')(observer(
  class ProductList extends Component {
    render() {
      return (
        <Base px={3} py={2}>
          <Flex gutter={3}>
            <Box col={6} p={2}>
              <InlineForm
                buttonLabel={<Icon name="search"/>}
                buttonStyles={styles.search.button}
                label="Search"
                name="q"
                onChange={function noRefCheck() {}}
                onClick={function noRefCheck() {}}
                />
            </Box>
            <Box col={6} p={2}>
            asdf
            </Box>
          </Flex>
          <div style={styles.techs}>
            {this.props.products.map((product, i) => (
              <div key={i}>{product}</div>
            ))}
          </div>
        </Base>
      );
    }
  }
));

ProductList.wrappedComponent.propTypes = {
  products: PropTypes.observableArray
};

export default ProductList;
