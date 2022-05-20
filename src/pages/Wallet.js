import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies, adicionarDispesa } from '../actions';
import Header from '../cmponents/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount = () => {
    const { fetchCurrenciesProp } = this.props;
    fetchCurrenciesProp();
  }

  // funcao para guardar as informacoes do state para o estado global ao clicar en adicionar

  handleButton = () => {
    const { adicionaDispesa } = this.props;
    adicionaDispesa(this.state);
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    }));
  }

  // ele pega o valor de cada input e guarda no state, para cuando clicar no botao todo fique salvo
  mudarInput = (event) => {
    const { target } = event;
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { moeda } = this.props;
    const { value, description } = this.state;
    return (
      <>
        <Header />
        <form>
          <label htmlFor="valor">
            valor
            <input
              onChange={ this.mudarInput }
              data-testid="value-input"
              type="number"
              id="valor"
              value={ value }
              name="value"
            />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input
              onChange={ this.mudarInput }
              data-testid="description-input"
              type="text"
              id="descricao"
              value={ description }
              name="description"
            />
          </label>
          <label htmlFor="Moeda">
            Moeda
            <select
              // value={ value }
              onChange={ this.mudarInput }
              id="Moeda"
              name="currency"
            >

              { moeda.map((item) => (<option key={ item }>{item}</option>)) }

            </select>
          </label>
          <label htmlFor="pagamento">
            Metodo de pagamento
            <select
              onChange={ this.mudarInput }
              name="method"
              // value={ value }
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
              onChange={ this.mudarInput }
              name="tag"
              // value={ value }
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
          <button
            type="button"
            onClick={ this.handleButton }
          >
            Adicionar despesa
          </button>
        </form>
      </>
    );
  }
}
// pasa as action como prop para ser usadas no componete.
const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesProp: () => dispatch(fetchCurrencies()),
  adicionaDispesa: (despesa) => dispatch(adicionarDispesa(despesa)),
});
// pego o stado global que esta salvo e com o mapstateprop estou passando esse estado para utilizar no componente que seria no caso renderizar na tela as moedas
const mapStateToProps = (state) => ({
  moeda: state.wallet.currencies,
});

Wallet.propTypes = {
  fetchCurrenciesProp: propTypes.func.isRequired,
  adicionaDispesa: propTypes.func.isRequired,
  moeda: propTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
