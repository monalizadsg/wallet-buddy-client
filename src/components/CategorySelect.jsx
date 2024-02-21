import React from "react";
import { Select, FormLabel, FormControl } from "@chakra-ui/react";

const CategorySelect = ({ categories, value, onChange }) => {
  // Separate income and expense categories
  const incomeCategories = categories.filter(
    (category) => category.type === "Income"
  );
  const expenseCategories = categories.filter(
    (category) => category.type === "Expense"
  );

  return (
    <>
      <FormControl isRequired mb={3}>
        <FormLabel mb={1}>Category</FormLabel>
        <Select
          name="category"
          placeholder="Select Category"
          value={value._id}
          onChange={onChange}
        >
          <optgroup label="Income">
            {incomeCategories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Expense">
            {expenseCategories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </optgroup>
        </Select>
      </FormControl>
    </>
  );
};

export default CategorySelect;
