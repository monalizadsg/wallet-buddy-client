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
} from "@chakra-ui/react";
import { MdFoodBank } from "react-icons/md";
import ProgressBar from "../components/ProgressBar";

const budgetData = [
  {
    id: 1,
    category: "Food",
    periodType: "Weekly",
    amountLimit: 100,
  },
  {
    id: 2,
    category: "Rent",
    periodType: "Monthly",
    amountLimit: 1750,
  },
  {
    id: 3,
    category: "Hydro",
    periodType: "Monthly",
    amountLimit: 30,
  },
  {
    id: 4,
    category: "Gifts",
    periodType: "Yearly",
    amountLimit: 1000,
  },
];

function BudgetList() {
  const budgetList = budgetData.map((item, index) => (
    <Card key={index} bgColor='gray.300'>
      <CardBody>
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
        <Box width='100%' mt={2}>
          <ProgressBar />
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
        <Button colorScheme='teal' variant='outline' size='xs'>
          Add
        </Button>
      </Flex>
      <Flex flexDir='column'>
        <Stack spacing={4}>{budgetList}</Stack>
      </Flex>
    </Flex>
  );
}

export default BudgetList;
