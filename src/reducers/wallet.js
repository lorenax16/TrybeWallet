// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { INFO_WALLET } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INFO_WALLET:
    return {

    };
  default:
    return state;
  }
};

export default wallet;
