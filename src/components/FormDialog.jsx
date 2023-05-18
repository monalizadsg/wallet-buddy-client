import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

function FormDialog({ title, isOpen, onClose, children, isEdit }) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter justifyContent='center'>
          <Button mr={3} onClick={onClose}>
            {isEdit ? "Cancel" : "Close"}
          </Button>
          <Button colorScheme='blue'>{isEdit ? "Save" : "Add"}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

FormDialog.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
  isEdit: PropTypes.bool,
};

export default FormDialog;
