import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component{
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.title}</h2>
        <h3>{this.props.university}</h3>
        <h4>{this.props.address}</h4>
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  address: PropTypes.string
};

export default Header;
