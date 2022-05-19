import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionInfoPersonal } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      ButtonDisabled: true,
    };
  }

  hanleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => {
      const { email, senha } = this.state;
      const validaEmail = this.validateEmail(email);
      const validaSenha = 6;
      if (validaEmail && senha.length >= validaSenha) {
        this.setState({
          ButtonDisabled: false,
        });
      } else {
        this.setState({
          ButtonDisabled: true,
        });
      }
    });
  }

  // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  validateEmail = (email) => {
    const verificar = /\S+@\S+\.\S+/;
    return verificar.test(email);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { history, addEmail } = this.props;
    const { email } = this.state;
    addEmail(email);
    history.push('/carteira');
  };

  render() {
    const { senha, email, ButtonDisabled } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            Email
            <input
              name="email"
              value={ email }
              id="email"
              type="email"
              placeholder="teste@teste.com"
              data-testid="email-input"
              onChange={ this.hanleChange }
            />
          </label>
          <label htmlFor="senha">
            Senha
            <input
              name="senha"
              value={ senha }
              id="senha"
              type="password"
              data-testid="password-input"
              onChange={ this.hanleChange }
            />
          </label>
          <button
            type="button"
            onClick={ this.handleSubmit }
            disabled={ ButtonDisabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmail: (email) => dispatch(actionInfoPersonal(email)),
});

Login.propTypes = {
  history: propTypes.objectOf(propTypes.shape).isRequired,
  addEmail: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
