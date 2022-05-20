import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  calculaDespesa = (despesa) => {
    let total = 0;
    despesa.forEach((item) => {
      // currency vem do state que foi guardado no state global
      const moeda = item.exchangeRates[item.currency].ask;
      console.log(moeda);
      const cambio = item.value * moeda;
      const result = cambio + total;
      total = result;
      // console.log(soma);
    });
    return total;
  }

  render() {
    const { email, despesa } = this.props;
    return (
      <>
        <h3 data-testid="email-field">{ email }</h3>
        <span data-testid="total-field">
          {this.calculaDespesa(despesa).toFixed(2)}
        </span>
        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  despesa: state.wallet.expenses,
});

Header.propTypes = {
  email: propTypes.string.isRequired,
  despesa: propTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps)(Header);
