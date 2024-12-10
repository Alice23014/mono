export const isName = (value: string) => {
  return /^[a-zA-Zа-яА-Я]+$/.test(value) || "Name must contain only letters";
};
