// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { INFO_MOEDA, INFO_WALLET } from '../actions';

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
  default:
    return state;
  }
};

export default wallet;
