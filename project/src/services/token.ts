const AUTH_TOKEN_KEY_NAME = '8959fbc5-f0e0-44d7-8057-303907bc50bc';

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};
