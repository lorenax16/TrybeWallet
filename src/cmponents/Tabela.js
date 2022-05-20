import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tabela extends Component {
  render() {
    const { despesas } = this.props;
    return (
      <>
        <div>Tabela</div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { despesas.map((despesa) => (
              <tr key={ despesa.id }>
                <td>{ despesa.description }</td>
                <td>{ despesa.tag }</td>
                <td>{ despesa.method }</td>
                <td>{ Number(despesa.value).toFixed(2) }</td>
                <td>{ despesa.exchangeRates[despesa.currency].name }</td>
                <td>
                  { Number(despesa.exchangeRates[despesa.currency]
                    .ask).toFixed(2)}

                </td>
                <td>
                  {Number(despesa.value * despesa.exchangeRates[despesa.currency]
                    .ask).toFixed(2)}

                </td>
                <td>Real</td>
                <td>Editar/Excluir</td>
              </tr>)) }

          </tbody>
        </table>

      </>
    );
  }
}

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
});

Tabela.propTypes = {
  despesas: propTypes.func.isRequired,
};

export default connect(mapStateToProps)(Tabela);
