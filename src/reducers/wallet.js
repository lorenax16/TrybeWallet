// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { DELETE_DESPESA, INFO_MOEDA, INFO_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INFO_MOEDA:
    // console.log(action);
    return {
      ...state, currencies: action.payload,
    };
  case INFO_WALLET:
    return {
      ...state, expenses: [...state.expenses, action.payload],
    };
  case DELETE_DESPESA:
    return {
      ...state, expenses: action.value,
    };
  default:
    return state;
  }
};

export default wallet;
