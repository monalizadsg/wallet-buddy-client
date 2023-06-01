import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

function TextField({ name, label, type, value, onChange, error }) {
  return (
    <FormControl isRequired mb={3}>
      <FormLabel mb={1} fontSize='xs'>
        {label}
      </FormLabel>
      <Input type={type} name={name} value={value} onChange={onChange} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
}

TextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default TextField;
