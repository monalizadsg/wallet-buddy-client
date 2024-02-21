import { useState } from "react";
import TextField from "../components/TextField";
import FormAction from "../components/FormActions";
import PropTypes from "prop-types";
import CategorySelect from "../components/CategorySelect";
import format from "date-fns/format";
import { createTransaction, updateTransaction } from "./transactionService";
import { getUserId } from "../commons/utils";

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
      amount: Number(transactionData.amount),
      userId,
    };

    let upsertPromise = null;
    if (selectedItem?._id) {
      upsertPromise = updateTransaction(newData, selectedItem._id);
    } else {
      upsertPromise = createTransaction(newData);
    }

    try {
      await upsertPromise;
      onUpdateData();
    } catch (error) {
      console.log(error);
    }
  };

  const { description, amount, category, date } = transactionData;

  return (
    <>
      <form noValidate>
        <TextField
          name="description"
          label="Description"
          value={description}
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
          value={format(new Date(date), "yyyy-MM-dd")}
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
