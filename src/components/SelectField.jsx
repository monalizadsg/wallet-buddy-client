import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import PropTypes from "prop-types";

function SelectField({ label, children }) {
  return (
    <FormControl isRequired mb={3}>
      <FormLabel mb={1} fontSize='xs'>
        {label}
      </FormLabel>
      <Select>{children}</Select>
    </FormControl>
  );
}

SelectField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SelectField;
