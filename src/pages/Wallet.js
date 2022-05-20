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
    const { moeda } = this.props;
    return (
      <>
        <Header />
        <form>
          <label htmlFor="valor">
            valor
            <input
              data-testid="value-input"
              type="number"
              id="valor"
            />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input
              data-testid="description-input"
              type="text"
              id="descricao"
            />
          </label>
          <label htmlFor="Moeda">
            Moeda
            <select id="Moeda">

              { moeda.map((item) => (<option key={ item }>{item}</option>)) }

            </select>
          </label>
          <label htmlFor="pagamento">
            Metodo de pagamento
            <select
              id="pagamento"
              data-testid="method-input"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            categoria
            <select
              id="categoria"
              data-testid="tag-input"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesProp: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  moeda: state.wallet.currencies,
});

Wallet.propTypes = {
  fetchCurrenciesProp: propTypes.func.isRequired,
  moeda: propTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
