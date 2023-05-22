import SelectField from "../components/SelectField";
import TextField from "../components/TextField";
import { categories } from "../commons/data";

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
