import { useState } from "react";

import {
  Flex,
  Heading,
  Button,
  Card,
  CardBody,
  Text,
  Stack,
  IconButton,
  Box,
  Icon,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { MdFoodBank, MdOutlineEdit } from "react-icons/md";
import ProgressBar from "../components/ProgressBar";
import FormDialog from "../components/FormDialog";
import BudgetForm from "./BudgetForm";
import { getPercentage } from "../commons/utils";
import DeleteButton from "../components/DeleteButton";

const budgetData = [
  {
    id: 1,
    category: "Food",
    periodType: "Weekly",
    expense: 60,
    amountLimit: 100,
  },
  {
    id: 2,
    category: "Rent",
    periodType: "Monthly",
    expense: 1750,
    amountLimit: 1750,
  },
  {
    id: 3,
    category: "Hydro",
    periodType: "Monthly",
    expense: 30,
    amountLimit: 30,
  },
  {
    id: 4,
    category: "Gifts",
    expense: 100,
    periodType: "Yearly",
    amountLimit: 1000,
  },
];

function BudgetList() {
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

  const budgetList = budgetData.map((item, index) => (
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
              <Text>{item.category}</Text>
              <Text>{`$${item.amountLimit.toFixed(2)}`}</Text>
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
            <DeleteButton title='Budget' />
          </Flex>
        </Flex>
        <Box width='100%' mt={2}>
          <ProgressBar value={getPercentage(item.expense, item.amountLimit)} />
        </Box>
      </CardBody>
    </Card>
  ));

  return (
    <Flex flexDir='column' w='100%' gap={5}>
      <Flex justifyContent='space-between'>
        <Heading as='h4' size='md'>
          Budget
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
          title={`${isEditing ? "Edit" : "Add"} Budget`}
          isOpen={isOpen}
          onClose={onClose}
          isEdit={isEditing}
        >
          <BudgetForm />
        </FormDialog>
      </Flex>
      <Flex flexDir='column'>
        <Stack spacing={4}>{budgetList}</Stack>
      </Flex>
    </Flex>
  );
}

export default BudgetList;
