const { items } = require("./university");

export const findUniversityById = (id) => {
  return items.filter((item) => item.id == id);
};
