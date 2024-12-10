export const isPhone = (value: string) => {
  return /^\(\d{3}\) \d{3}-\d{4}$/.test(value) || "Invalid phone number format";
};
