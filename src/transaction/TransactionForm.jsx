import { useState } from "react";
import SelectField from "../components/SelectField";
import TextField from "../components/TextField";
import { categories } from "../commons/data";
import FormAction from "../components/FormActions";
import PropTypes from "prop-types";
import { transactionData as tranxData } from "../commons/data";

function TransactionForm({ onClose, isEdit, onUpdateData }) {
  const [transactionData, setTransactionData] = useState({
    name: "",
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

  const handleOnSubmit = () => {
    const newData = {
      id: tranxData.length + 1,
      ...transactionData,
      amount: Number(transactionData.amount),
    };
    onUpdateData(newData);
    onClose();
  };

  const { name, amount, category, date } = transactionData;

  return (
    <>
      <form noValidate>
        <TextField
          name='name'
          label='Description'
          value={name}
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
        <FormAction
          onClose={onClose}
          isEdit={isEdit}
          onSubmit={handleOnSubmit}
        />
      </form>
    </>
  );
}

TransactionForm.propTypes = {
  onClose: PropTypes.func,
  isEdit: PropTypes.bool,
  onUpdateData: PropTypes.func,
};

export default TransactionForm;
