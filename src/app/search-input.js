import React from 'react';
import {Button, Input} from 'rebass';
import Icon from 'react-geomicons';

const SearchInput = props => {
  const {onChange, onSearch} = props;
  const styles = {
    searchButton: {
      marginLeft: '-1px',
      padding: '7px 9px'
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    searchInput: {
      flex: '1 1 auto'
    }
  };
  let value;

  const onChangeWrapper = event => {
    value = event.target.value;
    onChange(value);
  };
  const onSearchWrapper = () => {
    onSearch(value);
  };

  return (
    <div {...props} style={styles.searchContainer}>
      <Input
        hideLabel
        label="Search"
        mb={0}
        name="search"
        onChange={onChangeWrapper}
        placeholder="Search"
        rounded={false}
        style={styles.searchInput}
        />
      <Button onClick={onSearchWrapper} rounded={false} style={styles.searchButton} theme="warning">
        <Icon name="search"/>
      </Button>
    </div>
  );
};

SearchInput.propTypes = {
  /** onChange handler for input */
  onChange: React.PropTypes.func,
  /** onClick handler for button */
  onSearch: React.PropTypes.func
};

SearchInput.defaultProps = {
  onChange: () => {},
  onSearch: () => {}
};

export default SearchInput;
