import SelectField from "../components/SelectField";
import TextField from "../components/TextField";

function TransactionForm() {
  return (
    <>
      <form noValidate>
        <TextField label='Description' type='text' />
        <TextField label='Amount' type='number' />
        <SelectField />
        <TextField label='Date' type='date' />
      </form>
    </>
  );
}

export default TransactionForm;
