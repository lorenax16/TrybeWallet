// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const INFO_WALLET = 'INFO_WALLET';
export const INFO_MOEDA = 'INFO_MOEDA';

export const actionInfoPersonal = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export const actionInfoWAllet = ({ currencies, expenses }) => ({
  type: INFO_WALLET,
  payload: { currencies, expenses },
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
    console.log(arrayCurrencies);
    dispatch(currenciesAction(arrayCurrencies));
  };
}
