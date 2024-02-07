import { useState } from "react";
import TextField from "../components/TextField";
import FormAction from "../components/FormActions";
import PropTypes from "prop-types";
import { transactionData as tranxData } from "../commons/data";
import CategorySelect from "../components/CategorySelect";

function TransactionForm({
  onClose,
  isEdit,
  onUpdateData,
  selectedItem,
  categories,
}) {
  const initialData = {
    description: "",
    amount: "",
    category: "",
    date: "",
  };
  const [transactionData, setTransactionData] = useState(
    selectedItem || initialData
  );

  const handleInputChange = (event) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = event.target;
    setTransactionData({ ...transactionData, [name]: value });
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
  // const { name, amount, category } = transactionData;

  return (
    <>
      <form noValidate>
        <TextField
          name="description"
          label="Description"
          value={name}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          name="amount"
          value={amount}
          label="Amount"
          type="number"
          onChange={handleInputChange}
        />
        <CategorySelect
          categories={categories}
          value={category}
          onChange={handleInputChange}
        />
        <TextField
          name="date"
          label="Date"
          value={date}
          type="date"
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
  selectedItem: PropTypes.object,
};

export default TransactionForm;
