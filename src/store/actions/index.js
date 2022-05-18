// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const INFO_WALLET = 'INFO_WALLET';

export const actionInfoPersonal = (email) => ({
  type: SAVE_EMAIL,
  user: { email },
});

export const actionInfoWAllet = (currencies, expenses) => ({
  type: INFO_WALLET,
  wallet: { currencies, expenses },
});
