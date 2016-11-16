import React from 'react';
import {Button, Input} from 'rebass';
import Icon from 'react-geomicons';

const SearchInput = props => {
  const {onChange, onClick} = props;
  const styles = {
    searchContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    searchInput: {
      flex: '1 1 auto'
    },
    searchButton: {
      marginLeft: '-1px',
      padding: '7px 9px'
    }
  };

  return (
    <div {...props} style={styles.searchContainer}>
      <Input
        hideLabel
        label="Search"
        mb={0}
        name="search"
        onChange={onChange}
        placeholder="Search"
        rounded={false}
        style={styles.searchInput}
        />
      <Button onClick={onClick} rounded={false} style={styles.searchButton} theme="warning">
        <Icon name="search"/>
      </Button>
    </div>
  );
};

SearchInput.propTypes = {
  /** onChange handler for input */
  onChange: React.PropTypes.func,
  /** onClick handler for button */
  onClick: React.PropTypes.func
};

SearchInput.defaultProps = {
  onClick: () => {},
  onChange: () => {}
};

export default SearchInput;
