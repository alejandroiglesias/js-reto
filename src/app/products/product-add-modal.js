import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import {
  Button,
  Close,
  Input,
  Overlay,
  Panel,
  PanelFooter,
  PanelHeader,
  Space,
  Textarea
} from 'rebass';

const ProductAddModal = ({modalOpen, onClose}) => (
  <Overlay
    open={modalOpen}
    onDismiss={onClose}
    >
    <Panel theme="warning" style={{width: '560px'}}>
      <PanelHeader>
        Product Keeper
        <Space auto/>
        <Close onClick={onClose}/>
      </PanelHeader>
      <form>
        <Row>
          <Col xs={12} sm md lg>
            <Input label="Product Name" type="text"/>
          </Col>
          <Col xs={12} sm md lg>
            <Input label="Category" type="text"/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm md lg>
            <Input label="Brand" type="text"/>
          </Col>
          <Col xs={12} sm md lg>
            <Input label="Height" type="text"/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <Input label="Width" type="text"/>
          </Col>
        </Row>
        <Row>
          <Col xs sm md lg>
            <Textarea name="product[notes]" label="Notes"/>
          </Col>
        </Row>
      </form>
      <hr/>
      <PanelFooter style={{borderTop: 'none'}}>
        <Space auto/>
        <Button
          theme="warning"
          onClick={onClose}
          children="Save"
          />
      </PanelFooter>
    </Panel>
  </Overlay>
);

ProductAddModal.propTypes = {
  modalOpen: React.PropTypes.bool.isRequired,
  onClose: React.PropTypes.func.isRequired
};

export default ProductAddModal;
