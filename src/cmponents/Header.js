import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <h3 data-testid="email-field">{ email }</h3>
        <span data-testid="total-field">despesas totais: 0</span>
        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
