
export const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
}

export const clearLocalStorage = () => {
  localStorage.clear()
} 

export const removeItemLocalStorage = (key: string) => {
  localStorage.removeItem(key);
}

export const getItemLocalStorage = (key: string) => {
  return localStorage.getItem(key);
}

export const getLoginToken = () => {
  return localStorage.getItem('token');
}