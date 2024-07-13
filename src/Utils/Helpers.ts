import dayjs from 'dayjs';
import LOCAL_STORAGE_KEYS from './LocalKeys';

export const isValidEmail = (email: string) => {
  return /\S+@\S+\.\S+/.test(email);
};

export const isValidMobileNumber = (number: string) => {
  return /^\d{10}$/.test(number);
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
  removeLocalItem(LOCAL_STORAGE_KEYS.VENDOR_REGISTRATION_DATA);
};

export function extractPdfFilename(url: string) {
  // Use URL constructor to parse the URL
  const urlObj = new URL(url);

  // Extract the pathname from the URL
  const pathname = urlObj.pathname;

  // Split the pathname by '/' and get the last part
  const lastSegment = pathname.split('/').pop();

  // Split the last segment by '_' and get the part that contains the filename
  const filename = lastSegment?.split('_').pop();

  return filename;
}

export const formatDate = (date: string) => {
  const formattedDate = dayjs(date).format('MMMM DD, YYYY h:mm A');
  return formattedDate;
};
