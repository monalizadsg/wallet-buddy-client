import SelectField from "../components/SelectField";
import TextField from "../components/TextField";

const categories = {
  1: "Food",
  2: "Hydro",
  3: "Subscription",
  4: "Rent",
};

function TransactionForm() {
  return (
    <>
      <form noValidate>
        <TextField label='Description' type='text' />
        <TextField label='Amount' type='number' />
        <SelectField label='Category'>
          {Object.entries(categories).map(([key, value], index) => {
            return (
              <option key={index} value={key}>
                {value}
              </option>
            );
          })}
        </SelectField>
        <TextField label='Date' type='date' />
      </form>
    </>
  );
}

export default TransactionForm;
