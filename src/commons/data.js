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

export const transactionData = [
  {
    id: 1,
    name: "Burger and chips",
    category: "Food",
    amount: 5,
    date: "March 25, 2023",
  },
  {
    id: 2,
    name: "Hydro (May 2023)",
    category: "Hydro",
    amount: 50,
    date: "March 25, 2023",
  },
  {
    id: 3,
    name: "ProtonVPN",
    category: "Subscription",
    amount: 13,
    date: "March 26, 2023",
  },
  {
    id: 4,
    name: "Rental Fee (May)",
    category: "Rent",
    amount: 1750,
    date: "March 26, 2023",
  },
];

// TODO: convert to array of objects
export const categories = {
  1: "Food",
  2: "Hydro",
  3: "Subscription",
  4: "Rent",
};

export const savingsData = [
  {
    name: "Emergencyy Fund",
    category: "Personal",
    amount: 500,
    savedAmount: 500,
    targetAmount: 10000,
    period: "Monthly",
  },
  {
    name: "South Korea Travel",
    category: "Travel",
    amount: 100,
    savedAmount: 100,
    targetAmount: 2000,
    period: "Monthly",
  },
  {
    name: "Home Deposit",
    category: "Home",
    amount: 100,
    savedAmount: 100,
    targetAmount: 10000,
    period: "Monthly",
  },
  {
    name: "S&P500",
    category: "Investment",
    amount: 100,
    savedAmount: 100,
    targetAmount: 10000,
    period: "Monthly",
  },
  {
    name: "Christmas Gifts 2023",
    category: "Gift",
    amount: 50,
    savedAmount: 100,
    targetAmount: 1000,
    period: "Monthly",
  },
];

export const savingsTranxData = [
  {
    id: 1,
    name: "Emergencyy Fund",
    amount: 500,
    date: "March 25, 2023",
    type: "savings",
  },
  {
    id: 2,
    name: "South Korea Travel",
    amount: 100,
    date: "March 25, 2023",
    type: "savings",
  },
  {
    id: 3,
    name: "Home Deposit",
    amount: 100,
    date: "March 25, 2023",
    type: "savings",
  },
  {
    id: 4,
    name: "Christmas Gifts 2023",
    amount: 50,
    date: "March 25, 2023",
    type: "savings",
  },
];
