import SelectField from "../components/SelectField";
import TextField from "../components/TextField";
import { categories } from "../commons/data";

function SavingPlanForm() {
  return (
    <>
      <form noValidate>
        <TextField name='description' label='Description' type='text' />
        <SelectField name='category' label='Category'>
          {Object.entries(categories).map(([key, value], index) => {
            return (
              <option key={index} value={key}>
                {value}
              </option>
            );
          })}
        </SelectField>
        <TextField
          name='monthlyAmount'
          label='Monthly Saving Amount'
          type='number'
        />
        <TextField name='targetAmount' label='Target Amount' type='number' />
      </form>
    </>
  );
}

export default SavingPlanForm;
