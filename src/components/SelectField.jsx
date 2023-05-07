import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import PropTypes from "prop-types";

function SelectField() {
  return (
    <FormControl isRequired mb={3}>
      <FormLabel mb={1} fontSize='xs'>
        Category
      </FormLabel>
      <Select>
        <option value='option1'>Groceries</option>
        <option value='option2'>Hydro</option>
        <option value='option3'>Dining</option>
      </Select>
    </FormControl>
  );
}

SelectField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default SelectField;
