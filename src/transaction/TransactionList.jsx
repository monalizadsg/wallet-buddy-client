import React, { useState } from "react";
import { Heading, Button, Text, Flex, Icon } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import FormDialog from "../components/FormDialog";
import TransactionForm from "./TransactionForm";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";

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
  const [isEditing, setIsEditing] = useState(false);

  const handleOnClickEdit = () => {
    onOpen();
    setIsEditing(true);
  };

  const handleOnClickAdd = () => {
    onOpen();
    setIsEditing(false);
  };

  return (
    <Flex flexDir='column' w='100%'>
      <div className='title'>
        <Heading as='h4' size='md'>
          Transactions
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
          title={`${isEditing ? "Edit" : "Add"} Transaction`}
          isOpen={isOpen}
          onClose={onClose}
          isEdit={isEditing}
        >
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
                    <Flex
                      className='item'
                      key={index}
                      style={{
                        backgroundColor: "#EEEFEA",
                        // border: "1px solid red",
                        borderRadius: 10,
                        marginBottom: 12,
                      }}
                    >
                      <div className='item-details'>
                        <span className='icon'></span>
                        <div>
                          <Text fontSize='sm' as='b'>
                            {item.name}
                          </Text>
                          <Text fontSize='xs'>{item.category}</Text>
                        </div>
                      </div>
                      <Flex className='item-amount' alignItems='center' gap={6}>
                        <Text fontSize='sm' as='b'>
                          {`$${item.amount.toFixed(2)}`}
                        </Text>
                        <Flex gap={2}>
                          <Icon
                            as={MdOutlineEdit}
                            cursor='pointer'
                            opacity={0.5}
                            _hover={{ color: "teal.500", opacity: 1 }}
                            onClick={handleOnClickEdit}
                          />
                          <Icon
                            as={MdDeleteOutline}
                            cursor='pointer'
                            opacity={0.5}
                            _hover={{ color: "teal.500", opacity: 1 }}
                          />
                        </Flex>
                      </Flex>
                    </Flex>
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
