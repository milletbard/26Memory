import uuidv1 from "uuid/v1";

export const setArchives = form =>
  localStorage.setItem("archives", JSON.stringify(form));

export const removeArchives = () => localStorage.removeItem("archives");

export const getArchives = () => JSON.parse(localStorage.getItem("archives"));

export const checkArchives = () => !!localStorage.getItem("archives");

export const setLocalStorage = form => {
  let archives = { ...form, id: uuidv1() };
  if (checkArchives()) {
    let allArchives = getArchives();
    setArchives([...allArchives, archives]);
  } else {
    setArchives([archives]);
  }
};
