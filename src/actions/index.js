// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const INFO_WALLET = 'INFO_WALLET';
export const INFO_MOEDA = 'INFO_MOEDA';
export const SET_CURRENCIES = 'SET_CURRENCIES';

export const actionInfoPersonal = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export const actionInfoWAllet = (despesa) => ({
  type: INFO_WALLET,
  payload: despesa,
});

export const currenciesAction = (moedas) => ({
  type: INFO_MOEDA,
  payload: moedas,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    const arrayCurrencies = Object.keys(result).filter((moeda) => moeda !== 'USDT');
    // console.log(arrayCurrencies);
    dispatch(currenciesAction(arrayCurrencies));
  };
}

export function adicionarDispesa(despesa) {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all/');
    const result = await response.json();
    const dados = { exchangeRates: result, ...despesa };
    dispatch(actionInfoWAllet(dados));
  };
}
