export const getLocalStorageEmail = (key) => {
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
export const getLocalStorageAddedFavoriteMovies = (key) => {
  let data = localStorage.getItem(key);

  if (data) {
    return {
      topMovies: [],
      favoriteMovie: JSON.parse(data),
    };
  }
  return {
    topMovies: [],
    favoriteMovie: [],
  };
};
export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const clearLocalStorage = (key) => {
  localStorage.clear(key);
};
