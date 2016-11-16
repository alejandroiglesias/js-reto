import React, {Component} from 'react';
import {PropTypes, inject, observer} from 'mobx-react';
import {Base, Button, Space, Table} from 'rebass';
import {Col, Grid, Row} from 'react-flexbox-grid';
import SearchInput from '../search-input';
import ProductAddModal from './product-add-modal';
import fuzzysearch from 'fuzzysearch';

const styles = {
  actionsContainer: {
    display: 'flex'
  }
};

const ProductList = inject('products')(observer(
  class ProductList extends Component {

    constructor(props) {
      super(props);
      this.state = {
        isAddModalOpen: false
      };
      this.handleAddModalClose = this.handleAddModalClose.bind(this);
      this.handleAddProduct = this.handleAddProduct.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
    }

    handleAddModalClose() {
      this.setState({isAddModalOpen: false});
    }

    handleAddProduct() {
      this.setState({isAddModalOpen: true});
    }

    handleSearch(search) {
      this.setState({search});
    }

    render() {
      const products = this.props.products.filter(product => {
        if (!this.state.search) {
          return true;
        }
        return fuzzysearch(this.state.search.toLowerCase(), product.name.toLowerCase());
      });
      return (
        <Base>
          <Base px={3} py={2}>
            <Grid>
              <Row>
                <Col xs={12} sm={3} md={3} lg={3}>
                  <SearchInput onSearch={this.handleSearch}/>
                </Col>
                <Col xs={12} sm md lg style={styles.actionsContainer}>
                  <Space auto/>
                  <Button
                    backgroundColor="orange"
                    children="+ Product Keeper"
                    onClick={this.handleAddProduct}
                    rounded={false}
                    />
                </Col>
              </Row>
            </Grid>
          </Base>
          <Grid>
            <Row>
              <Col xs sm md lg>
                <Table
                  data={products.map(product => Object.values(product))}
                  headings={['Product Name', 'Category', 'Brand', 'Height', 'Width', 'Notes']}
                  />
              </Col>
            </Row>
          </Grid>
          <ProductAddModal
            modalOpen={this.state.isAddModalOpen}
            onClose={this.handleAddModalClose}
            />
        </Base>
      );
    }
  }
));

ProductList.wrappedComponent.propTypes = {
  children: React.PropTypes.node,
  products: PropTypes.observableArray
};

export default ProductList;
