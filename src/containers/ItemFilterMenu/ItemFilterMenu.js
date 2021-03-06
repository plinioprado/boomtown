import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { selectFilterItems } from '../../redux/items';

let names = [];

class SelectFields extends Component {

  handleChange = (event, index, filterValues) => this.props.dispatch(selectFilterItems(filterValues));

  menuItems = (filterValues) => {
    return names.map((name) => (
      <MenuItem
        key={name}
        insetChildren
        checked={filterValues && filterValues.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));
  }

  render() {
    names = this.props.filterList;
    const filterValues = this.props.filterValues;

    const childElements = names.map((name) => (
      <MenuItem
        key={name}
        insetChildren
        checked={filterValues && filterValues.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));

    return (
      <SelectField
        multiple
        hintText="Select a name"
        value={filterValues}
        onChange={this.handleChange}
      >
        {childElements}
      </SelectField>
    );
  }
}

SelectFields.propTypes = {
  filterList: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    filterList: store.items.filterList,
    filterValues: store.items.filterValues
  };
}

export default connect(mapStateToProps)(SelectFields);
