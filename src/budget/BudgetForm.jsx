import SelectField from "../components/SelectField";
import TextField from "../components/TextField";

const periodType = {
  WEEKLY: "Weekly",
  MONTHLY: "Monthly",
  YEARLY: "Yearly",
};

const categories = {
  1: "Food",
  2: "Hydro",
  3: "Subscription",
  4: "Rent",
};

function BudgetForm() {
  return (
    <form noValidate>
      <SelectField label='Category'>
        {Object.entries(categories).map(([key, value], index) => {
          return (
            <option key={index} value={key}>
              {value}
            </option>
          );
        })}
      </SelectField>
      <SelectField label='Period Type'>
        {Object.entries(periodType).map(([key, value], index) => {
          return (
            <option key={index} value={key}>
              {value}
            </option>
          );
        })}
      </SelectField>
      <TextField label='Amount Limit' type='number' />
    </form>
  );
}

export default BudgetForm;
