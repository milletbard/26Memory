export const setArchives = archives =>
  localStorage.setItem("archives", JSON.stringify(archives));

export const removeArchives = () => localStorage.removeItem("archives");

export const getArchives = () => JSON.parse(localStorage.getItem("archives"));

export const checkArchives = () => !!localStorage.getItem("archives");
