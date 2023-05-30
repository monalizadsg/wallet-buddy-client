import SelectField from "../components/SelectField";
import TextField from "../components/TextField";
import { categories } from "../commons/data";

const periodType = {
  WEEKLY: "Weekly",
  MONTHLY: "Monthly",
  YEARLY: "Yearly",
};

function BudgetForm() {
  return (
    <form noValidate>
      <SelectField name='category' label='Category'>
        {Object.entries(categories).map(([key, value], index) => {
          return (
            <option key={index} value={key}>
              {value}
            </option>
          );
        })}
      </SelectField>
      <SelectField name='periodType' label='Period Type'>
        {Object.entries(periodType).map(([key, value], index) => {
          return (
            <option key={index} value={key}>
              {value}
            </option>
          );
        })}
      </SelectField>
      <TextField name='amountLimit' label='Amount Limit' type='number' />
    </form>
  );
}

export default BudgetForm;
