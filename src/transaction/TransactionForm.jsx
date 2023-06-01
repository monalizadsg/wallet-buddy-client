import { useState } from "react";
import SelectField from "../components/SelectField";
import TextField from "../components/TextField";
import { categories } from "../commons/data";
// import { expenseData } from "../commons/data";

function TransactionForm() {
  const [transactionData, setTransactionData] = useState({
    description: "",
    amount: "",
    category: "",
    date: "",
  });
  const handleInputChange = (event) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = event.target;
    setTransactionData({ ...transactionData, [name]: value });
    console.log({ transactionData });
  };

  const { description, amount, category, date } = transactionData;

  return (
    <>
      <form noValidate>
        <TextField
          name='description'
          label='Description'
          value={description}
          type='text'
          onChange={handleInputChange}
        />
        <TextField
          name='amount'
          value={amount}
          label='Amount'
          type='number'
          onChange={handleInputChange}
        />
        <SelectField
          name='category'
          label='Category'
          value={category}
          onChange={handleInputChange}
        >
          {Object.entries(categories).map(([key, value], index) => {
            return (
              <option key={index} value={key}>
                {value}
              </option>
            );
          })}
        </SelectField>
        <TextField
          name='date'
          label='Date'
          value={date}
          type='date'
          onChange={handleInputChange}
        />
      </form>
    </>
  );
}

export default TransactionForm;
