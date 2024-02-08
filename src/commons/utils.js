export const getUserId = () => {
  return localStorage.getItem("id");
};

export const getPercentage = (expense, limit) => {
  const percentage = (expense / limit) * 100;
  return Math.round(percentage);
};
