import { Flex, Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

function FormAction({ onClose, isEdit, onSubmit }) {
  return (
    <Flex justifyContent='center' p={3}>
      <Button mr={3} onClick={onClose}>
        {isEdit ? "Cancel" : "Close"}
      </Button>
      <Button colorScheme='blue' onClick={onSubmit}>
        {isEdit ? "Save" : "Add"}
      </Button>
    </Flex>
  );
}

FormAction.propTypes = {
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  isEdit: PropTypes.bool,
};

export default FormAction;
