import React from 'react';
import {
  Button,
  Close,
  Overlay,
  Panel,
  PanelFooter,
  PanelHeader,
  Space
} from 'rebass';
import {inject, observer, PropTypes} from 'mobx-react';
import ProductForm from './product-form';

const defaultNewProduct = {
  name: '',
  category: '',
  brand: '',
  height: '',
  width: '',
  notes: ''
};

const ProductAddModal = inject('products')(observer(
  class ProductAddModal extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        newProduct: defaultNewProduct
      };
      this.handleProductFormChange = this.handleProductFormChange.bind(this);
      this.handleSave = this.handleSave.bind(this);
    }

    handleProductFormChange(newProduct) {
      this.setState({newProduct});
    }

    handleSave() {
      this.props.products.push(this.state.newProduct);
      this.setState({newProduct: defaultNewProduct}, this.props.onClose);
    }

    render() {
      return (
        <Overlay
          open={this.props.modalOpen}
          onDismiss={this.props.onClose}
          >
          <Panel theme="warning" style={{width: '560px'}}>
            <PanelHeader>
              Product Keeper
              <Space auto/>
              <Close onClick={this.props.onClose}/>
            </PanelHeader>
            <ProductForm
              onChange={this.handleProductFormChange}
              value={this.state.newProduct}
              />
            <hr/>
            <PanelFooter style={{borderTop: 'none'}}>
              <Space auto/>
              <Button
                theme="warning"
                onClick={this.handleSave}
                children="Save"
                />
            </PanelFooter>
          </Panel>
        </Overlay>
      );
    }
  }
));

ProductAddModal.wrappedComponent.propTypes = {
  modalOpen: React.PropTypes.bool.isRequired,
  onClose: React.PropTypes.func.isRequired,
  products: PropTypes.observableArray
};

export default ProductAddModal;
