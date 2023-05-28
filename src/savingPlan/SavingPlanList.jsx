import {
  Flex,
  Heading,
  Card,
  CardBody,
  Text,
  IconButton,
  Stack,
  Icon,
  Box,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import FormDialog from "../components/FormDialog";
import ProgressBar from "../components/ProgressBar";
import { getPercentage } from "../commons/utils";
import DeleteButton from "../components/DeleteButton";
import { MdOutlineEdit, MdFoodBank } from "react-icons/md";
import { useState } from "react";
import { savingsData } from "../commons/data";
import SavingPlanForm from "./SavingPlanForm";

function SavingPlanList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);

  const handleOnClickEdit = () => {
    onOpen();
    setIsEditing(true);
  };

  const handleOnClickAdd = () => {
    onOpen();
    setIsEditing(false);
  };

  const planList = savingsData.map((item, index) => (
    <Card key={index} bgColor='gray.300'>
      <CardBody>
        <Flex justifyContent='space-between'>
          <Flex gap={5} alignItems='center'>
            <IconButton
              variant='outline'
              colorScheme='teal'
              aria-label='Call Sage'
              fontSize='30px'
              borderRadius='50%'
              icon={<MdFoodBank />}
            />
            <Flex flexDir='column'>
              <Text>{item.name}</Text>
              <Text>
                {`$${item.savedAmount.toFixed(2)} `}
                <span style={{ color: "gray", opacity: 0.8 }}>
                  {`of $${item.targetAmount.toFixed(2)}`}
                </span>
              </Text>
            </Flex>
          </Flex>
          <Flex gap={1}>
            <Icon
              as={MdOutlineEdit}
              cursor='pointer'
              opacity={0.8}
              _hover={{ color: "teal.500", opacity: 1 }}
              onClick={handleOnClickEdit}
            />
            <DeleteButton title='Saving Plan' />
          </Flex>
        </Flex>
        <Box width='100%' mt={2}>
          <ProgressBar
            value={getPercentage(item.savedAmount, item.targetAmount)}
          />
        </Box>
      </CardBody>
    </Card>
  ));

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
      <Flex flexDir='column'>
        <Stack spacing={4}>{planList}</Stack>
      </Flex>
    </Flex>
  );
}

export default SavingPlanList;
