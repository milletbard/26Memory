export const setArchives = archives =>
  localStorage.setItem("archives", archives);

export const removeArchives = () => localStorage.removeItem("archives");

export const getArchives = () => localStorage.getItem("archives");

export const checkArchives = () => !!localStorage.getItem("archives");
