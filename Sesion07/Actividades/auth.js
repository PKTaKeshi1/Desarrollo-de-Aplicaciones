let isAuthenticated = false;

export const login = (callback) => {
  isAuthenticated = true;
  setTimeout(callback, 100);
};

export const logout = (callback) => {
  isAuthenticated = false;
  setTimeout(callback, 100);
};

export const checkAuth = () => isAuthenticated;
