import LOCAL_STORAGE_KEYS from './LocalKeys';

export const isValidEmail = (email: string) => {
  return /\S+@\S+\.\S+/.test(email);
};

export const isValidPAN = (panNumber: string) => {
  const regex = /^[A-Z]{3}[A-Z][A-Z][0-9]{4}[A-Z]$/;
  return regex.test(panNumber);
};

export const isStrongPassword = (password: string) => {
  var strongPasswordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return strongPasswordRegex.test(password);
};

export const setLocalItem = (key: string, value: any) => {
  console.log(key, value);

  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalItem = (key: string): any => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const removeLocalItem = (key: string) => {
  localStorage.removeItem(key);
};

export const resetLocalStorage = () => {
  removeLocalItem(LOCAL_STORAGE_KEYS.TOKEN);
  removeLocalItem(LOCAL_STORAGE_KEYS.IS_AUTHENTICATED);
  removeLocalItem(LOCAL_STORAGE_KEYS.USER);
  removeLocalItem(LOCAL_STORAGE_KEYS.USER_TYPE);
};

export const getFullUserName = () => {
  return (
    getLocalItem(LOCAL_STORAGE_KEYS.USER).firstName +
    ' ' +
    getLocalItem(LOCAL_STORAGE_KEYS.USER).lastName
  );
};
