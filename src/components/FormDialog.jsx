import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Flex,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

function FormDialog({ title, isOpen, onClose, children }) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter justifyContent='center'>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme='blue'>Add</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

FormDialog.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default FormDialog;
