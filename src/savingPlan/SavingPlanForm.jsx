import SelectField from "../components/SelectField";
import TextField from "../components/TextField";
import { categories } from "../commons/data";

function SavingPlanForm() {
  return (
    <>
      <form noValidate>
        <TextField label='Description' type='text' />
        <SelectField label='Category'>
          {Object.entries(categories).map(([key, value], index) => {
            return (
              <option key={index} value={key}>
                {value}
              </option>
            );
          })}
        </SelectField>
        <TextField label='Monthly Saving Amount' type='number' />
        <TextField label='Target Amount' type='number' />
      </form>
    </>
  );
}

export default SavingPlanForm;
