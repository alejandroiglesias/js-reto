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

const styles = {
  hr: {
    border: 'none',
    borderTop: '1px solid #F5F5F5',
    marginTop: 0,
    marginBottom: '-16px'
  },
  panel: {
    width: '560px'
  },
  panelFooter: {
    borderTop: 'none'
  }
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
          <Panel theme="warning" rounded={false} style={styles.panel}>
            <PanelHeader>
              Product Keeper
              <Space auto/>
              <Close onClick={this.props.onClose}/>
            </PanelHeader>
            <ProductForm
              onChange={this.handleProductFormChange}
              value={this.state.newProduct}
              />
            <hr style={styles.hr}/>
            <PanelFooter style={styles.panelFooter}>
              <Space auto/>
              <Button
                children="Save"
                onClick={this.handleSave}
                rounded={false}
                theme="warning"
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
