// src/utils/localStorage.js

const KEY = "installedApps";

export const installApp = (app) => {
  const list = JSON.parse(localStorage.getItem(KEY)) || [];
  if (!list.find(a => a.id === app.id)) {
    list.push(app);
    localStorage.setItem(KEY, JSON.stringify(list));
  }
};

export const getInstalledApps = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const removeInstalledApp = (id) => {
  const list = JSON.parse(localStorage.getItem(KEY)) || [];
  const next = list.filter(a => a.id !== id);
  localStorage.setItem(KEY, JSON.stringify(next));
};
// get
export const loadInstall = () => {
  try {
    const data = localStorage.getItem('installation')
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.log(err)
    return []
  }
}

// save
export const updateList = product => {
  const wishlist = loadInstall()

  try {
    const isDuplicate = wishlist.some(p => p.id === product.id)
    if (isDuplicate) return alert('Already added in wishlist')
    const updatedWishlist = [...wishlist, product]
    localStorage.setItem('installation', JSON.stringify(updatedWishlist))
  } catch (err) {
    console.log(err)
  }
}

// delete
export const removeFromWishlist = id => {
  const wishlist = loadInstall()
  try {
    const updatedWishlist = wishlist.filter(p => p.id !== id)
    localStorage.setItem('installation', JSON.stringify(updatedWishlist))
  } catch (err) {
    console.log(err)
  }
}
