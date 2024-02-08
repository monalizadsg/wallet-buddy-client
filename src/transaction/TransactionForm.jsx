import { useState } from "react";
import TextField from "../components/TextField";
import FormAction from "../components/FormActions";
import PropTypes from "prop-types";
import CategorySelect from "../components/CategorySelect";
import format from "date-fns/format";
import { createTransaction } from "./transactionService";
import { getUserId } from "../commons/utils";

function TransactionForm({
  onClose,
  isEdit,
  onSaveSuccess,
  selectedItem,
  categories,
}) {
  const initialData = {
    description: "",
    amount: "",
    category: "",
    date: format(new Date(), "yyyy-MM-dd"),
  };
  const [transactionData, setTransactionData] = useState(
    selectedItem || initialData
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTransactionData({ ...transactionData, [name]: value });
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    console.log({ date });
    setTransactionData({
      ...transactionData,
      date: format(new Date(date), "yyyy-MM-dd"),
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const userId = getUserId();
    console.log(userId);

    const newData = {
      ...transactionData,
      categoryId: category,
      amount: Number(transactionData.amount),
      userId,
    };

    try {
      const result = await createTransaction(newData);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    //TODO: pass to the list to display new data
    // onSaveSuccess(newData);
    // onClose();
  };

  const { name, amount, category, date } = transactionData;

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
          onChange={handleDateChange}
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
