import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import PropTypes from "prop-types";

function SelectField({ name, label, children }) {
  return (
    <FormControl isRequired mb={3}>
      <FormLabel mb={1} fontSize='xs'>
        {label}
      </FormLabel>
      <Select name={name}>{children}</Select>
    </FormControl>
  );
}

SelectField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SelectField;
