export const getLocalStorage = (key) => {
  let data = localStorage.getItem(key);

  if (data) {
    return {
      email: JSON.parse(data),
    };
  }
  return {
    email: "",
  };
};
export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const clearLocalStorage = (key) => {
  localStorage.clear(key);
};
