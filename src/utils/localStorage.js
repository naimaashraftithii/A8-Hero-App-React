// localStorage.js

export const installApp = (app) => {
  let installed = JSON.parse(localStorage.getItem("installedApps")) || [];
  if (!installed.find(a => a.id === app.id)) {
    installed.push(app);
    localStorage.setItem("installedApps", JSON.stringify(installed));
  }
};

export const getInstalledApps = () => {
  return JSON.parse(localStorage.getItem("installedApps")) || [];
};

export const loadWishlist = () => {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
};

export const removeFromWishlist = (id) => {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist = wishlist.filter(item => item.id !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};
