import SelectField from "../components/SelectField";
import TextField from "../components/TextField";
import { categories } from "../commons/data";

const periodType = {
  "BI-WEEKLY": "Bi-Weekly",
  MONTHLY: "Monthly",
};

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
        <TextField label='Amount' type='number' />
        <TextField label='Target Amount' type='number' />
        <SelectField label='Period Type'>
          {Object.entries(periodType).map(([key, value], index) => {
            return (
              <option key={index} value={key}>
                {value}
              </option>
            );
          })}
        </SelectField>
      </form>
    </>
  );
}

export default SavingPlanForm;
