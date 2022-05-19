// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const INFO_WALLET = 'INFO_WALLET';

export const actionInfoPersonal = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export const actionInfoWAllet = (currencies, expenses) => ({
  type: INFO_WALLET,
  payload: { currencies, expenses },
});
