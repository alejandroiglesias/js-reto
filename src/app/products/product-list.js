import React, {Component} from 'react';
import {PropTypes, inject, observer} from 'mobx-react';
import {Base, Button, InlineForm, Table} from 'rebass';
import {Col, Grid, Row} from 'react-flexbox-grid';
import Icon from 'react-geomicons';
import {withRouter} from 'react-router';
import ProductAddModal from './product-add-modal';

const styles = {
  actionsContainer: {
    textAlign: 'right'
  },
  search: {
    button: {
      padding: '7px 9px'
    }
  }
};

const ProductList = inject('products')(observer(withRouter(
  class ProductList extends Component {

    constructor(props) {
      super(props);
      this.state = {
        isAddModalOpen: false
      };
      this.handleAddProduct = this.handleAddProduct.bind(this);
      this.handleAddModalClose = this.handleAddModalClose.bind(this);
    }

    handleAddProduct() {
      this.setState({isAddModalOpen: true});
    }

    handleAddModalClose() {
      this.setState({isAddModalOpen: false});
    }

    render() {
      return (
        <div>
          <Base px={3} py={2}>
            <Grid>
              <Row>
                <Col xs={12} sm md lg>
                  <InlineForm
                    buttonLabel={<Icon name="search"/>}
                    buttonStyles={styles.search.button}
                    label="Search"
                    name="q"
                    onChange={function noRefCheck() {}}
                    onClick={function noRefCheck() {}}
                    placeholder="Search"
                    />
                </Col>
                <Col xs={12} sm md lg style={styles.actionsContainer}>
                  <Button backgroundColor="orange" onClick={this.handleAddProduct}>
                    + Product Keeper
                  </Button>
                </Col>
              </Row>
            </Grid>
          </Base>
          <Grid>
            <Row>
              <Col xs sm md lg>
                <Table
                  data={this.props.products.map(product => Object.values(product))}
                  headings={['Product Name', 'Category', 'Brand', 'Height', 'Width', 'Notes']}
                  />
              </Col>
            </Row>
          </Grid>
          <ProductAddModal modalOpen={this.state.isAddModalOpen} onClose={this.handleAddModalClose}/>
        </div>
      );
    }
  }
)));

ProductList.wrappedComponent.propTypes = {
  children: React.PropTypes.node,
  products: PropTypes.observableArray,
  router: React.PropTypes.object
};

export default ProductList;
