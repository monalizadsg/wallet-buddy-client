import { Flex, Heading, Text, IconButton } from "@chakra-ui/react";
import { MdFoodBank } from "react-icons/md";
import Header from "../components/Header";
import BudgetList from "./BudgetList";

const budgetTransactionsData = {
  Food: [
    {
      id: 1,
      name: "Burger and chips",
      category: "Food",
      amount: 5,
      date: "March 25, 2023",
    },
    {
      id: 2,
      name: "Cucumber",
      category: "Food",
      amount: 2,
      date: "March 26, 2023",
    },
  ],
  Hydro: [
    {
      id: 1,
      name: "Hydro (May 2023)",
      category: "Hydro",
      amount: 50,
      date: "March 25, 2023",
    },
  ],
  Subscription: [
    {
      id: 1,
      name: "ProtonVPN",
      category: "Subscription",
      amount: 13,
      date: "March 26, 2023",
    },
  ],
};

function Budget() {
  const list = Object.entries(budgetTransactionsData).map(
    ([categoryKey, values], index) => (
      <Flex key={index} flexDir='column'>
        <Text as='b' color='gray.500'>
          {categoryKey}
        </Text>
        <Flex flexDir='column' mt={2} gap={2}>
          {values.map((item, index) => (
            <Flex
              key={index}
              justifyContent='space-between'
              alignItems='center'
              // border='1px solid red'
            >
              <Flex alignItems='center'>
                <IconButton
                  variant='outline'
                  colorScheme='teal'
                  aria-label='Call Sage'
                  fontSize='30px'
                  borderRadius='50%'
                  mr={3}
                  icon={<MdFoodBank />}
                />
                <Flex flexDir='column'>
                  <Text fontSize='sm'>{item.name}</Text>
                  <Text fontSize='xs'>{item.date}</Text>
                </Flex>
              </Flex>
              <Text fontSize='sm'>{`$${item.amount.toFixed(2)}`}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    )
  );

  return (
    <Flex flex='80%' flexDir='column'>
      <Header />
      <Flex flex='1'>
        <Flex
          flex='55%'
          p={6}
          borderRight='2px solid rgb(226, 226, 226)'
          className='left-col'
        >
          <BudgetList />
        </Flex>
        <Flex flex='35%' flexDir='column' p={5} className='right-col'>
          <Heading as='h4' size='md'>
            Recent Transactions
          </Heading>
          <Flex flexDir='column' mt={5} gap={5}>
            {list}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Budget;
