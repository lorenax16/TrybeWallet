// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return {

    };
  default:
    return state;
  }
};

export default user;