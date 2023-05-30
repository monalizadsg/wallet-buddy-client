import SelectField from "../components/SelectField";
import TextField from "../components/TextField";
import { categories } from "../commons/data";

function TransactionForm() {
  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };
  return (
    <>
      <form noValidate>
        <TextField
          name='description'
          label='Description'
          type='text'
          onChange={handleChange}
        />
        <TextField name='amount' label='Amount' type='number' />
        <SelectField name='category' label='Category'>
          {Object.entries(categories).map(([key, value], index) => {
            return (
              <option key={index} value={key}>
                {value}
              </option>
            );
          })}
        </SelectField>
        <TextField name='date' label='Date' type='date' />
      </form>
    </>
  );
}

export default TransactionForm;
