import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import {Input, Textarea} from 'rebass';

class ProductForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    // This is needed so that object properties are set and read in this specific order.
    const value = {
      name: this.props.value.name,
      category: this.props.value.category,
      brand: this.props.value.brand,
      height: this.props.value.height,
      width: this.props.value.width,
      notes: this.props.value.notes
    };
    this.props.onChange(Object.assign({}, value, {[event.target.name]: event.target.value}));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Row>
          <Col xs={12} sm md lg>
            <Input
              label="Product Name"
              name="name"
              onInput={this.handleInput}
              rounded={false}
              type="text"
              value={this.props.value.name}
              />
          </Col>
          <Col xs={12} sm md lg>
            <Input
              label="Category"
              name="category"
              onInput={this.handleInput}
              rounded={false}
              type="text"
              value={this.props.value.category}
              />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm md lg>
            <Input
              label="Brand"
              name="brand"
              onInput={this.handleInput}
              rounded={false}
              type="text"
              value={this.props.value.brand}
              />
          </Col>
          <Col xs={12} sm md lg>
            <Input
              label="Height"
              name="height"
              onInput={this.handleInput}
              rounded={false}
              type="text"
              value={this.props.value.height}
              />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <Input
              label="Width"
              name="width"
              onInput={this.handleInput}
              rounded={false}
              type="text"
              value={this.props.value.width}
              />
          </Col>
        </Row>
        <Row>
          <Col xs sm md lg>
            <Textarea
              name="notes"
              label="Notes"
              onInput={this.handleInput}
              rounded={false}
              value={this.props.value.notes}
              />
          </Col>
        </Row>
      </form>
    );
  }
}

ProductForm.propTypes = {
  value: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func
};

export default ProductForm;
