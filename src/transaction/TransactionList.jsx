import React from "react";
import { Heading, Button, Text, Flex } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import FormDialog from "../components/FormDialog";
import TransactionForm from "./TransactionForm";

const transactionData = [
  {
    id: 1,
    name: "Burger and chips",
    category: "Food",
    amount: 5,
    date: "March 25, 2023",
  },
  {
    id: 2,
    name: "Hydro (May 2023)",
    category: "Hydro",
    amount: 50,
    date: "March 25, 2023",
  },
  {
    id: 3,
    name: "ProtonVPN",
    category: "Subscription",
    amount: 13,
    date: "March 26, 2023",
  },
  {
    id: 4,
    name: "Rental Fee (May)",
    category: "Rent",
    amount: 1750,
    date: "March 26, 2023",
  },
];

const dataByDate = transactionData.reduce((group, item) => {
  const { date } = item;
  group[date] = group[date] ?? [];
  group[date].push(item);
  return group;
}, {});

function TransactionList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex flexDir='column' w='100%'>
      <div className='title'>
        <Heading as='h4' size='md'>
          Transactions
        </Heading>
        <Button onClick={onOpen} colorScheme='teal' variant='outline' size='xs'>
          Add
        </Button>
        <FormDialog title='Add Transaction' isOpen={isOpen} onClose={onClose}>
          <TransactionForm />
        </FormDialog>
      </div>
      <div className='content'>
        <div>
          {Object.entries(dataByDate).map(([date, values], index) => {
            return (
              <React.Fragment key={index}>
                <div className='date'>{date}</div>
                {values.map((item, index) => {
                  return (
                    <div className='item' key={index}>
                      <div className='item-details'>
                        <span className='icon'></span>
                        <div>
                          <Text fontSize='sm'>{item.name}</Text>
                          <Text fontSize='xs'>{item.category}</Text>
                        </div>
                      </div>
                      <div className='item-amount'>
                        <Text fontSize='sm'>
                          {`$${item.amount.toFixed(2)}`}
                        </Text>
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </Flex>
  );
}

export default TransactionList;
