export const expenseData = [
  {
    id: 1,
    category: "Groceries",
    total: 120,
    limit: 300,
  },
  {
    id: 2,
    category: "Subscription",
    total: 200,
    limit: 0,
  },
  {
    id: 3,
    category: "Dining",
    total: 100,
    limit: 30,
  },
  {
    id: 3,
    category: "Rent",
    total: 1750,
    limit: 0,
  },
];

export const getPercentage = (expense, limit) => {
  const percentage = (expense / limit) * 100;
  return Math.round(percentage);
};
