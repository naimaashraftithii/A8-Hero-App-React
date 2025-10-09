// src/utils/localStorage.js
const KEY = "installedApps";

export const installApp = (app) => {
  const list = JSON.parse(localStorage.getItem(KEY)) || [];
  if (!list.find((a) => a.id === app.id)) {
    list.push(app);
    localStorage.setItem(KEY, JSON.stringify(list));
  }
};

export const getInstalledApps = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const removeInstalledApp = (id) => {
  const list = JSON.parse(localStorage.getItem(KEY)) || [];
  const next = list.filter((a) => a.id !== id);
  localStorage.setItem(KEY, JSON.stringify(next));
};
