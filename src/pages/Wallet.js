import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';
import Header from '../cmponents/Header';

class Wallet extends React.Component {
  componentDidMount = () => {
    const { fetchCurrenciesProp } = this.props;
    fetchCurrenciesProp();
  }

  render() {
    return (
      <>
        <Header />
        <div>TrybeWallet</div>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesProp: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  fetchCurrenciesProp: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
