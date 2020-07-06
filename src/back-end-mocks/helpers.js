const { items, notes } = require("./university");

export const findUniversityById = (id) => {
  return items.find((item) => item.id == id);
};

export const findNoteById = (id) => {
  return notes.find((item) => item.id == id);
};
