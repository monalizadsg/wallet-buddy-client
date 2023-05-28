import { Flex, Heading, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import FormDialog from "../components/FormDialog";

import { useState } from "react";

import SavingPlanForm from "./SavingPlanForm";
import SavingList from "./SavingList";
import { savingsData } from "../commons/data";

function SavingPlanList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);

  const handleOnClickAdd = () => {
    onOpen();
    setIsEditing(false);
  };

  return (
    <Flex flexDir='column' w='100%' gap={5}>
      <Flex justifyContent='space-between'>
        <Heading as='h4' size='md'>
          Saving Plan
        </Heading>
        <Button
          onClick={handleOnClickAdd}
          colorScheme='teal'
          variant='outline'
          size='xs'
        >
          Add
        </Button>
        <FormDialog
          title={`${isEditing ? "Edit" : "Add"} Saving Plan`}
          isOpen={isOpen}
          onClose={onClose}
          isEdit={isEditing}
        >
          <SavingPlanForm />
        </FormDialog>
      </Flex>
      <SavingList
        onOpen={onOpen}
        setIsEditing={setIsEditing}
        data={savingsData}
      />
    </Flex>
  );
}

export default SavingPlanList;
