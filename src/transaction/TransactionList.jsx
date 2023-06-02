import React, { useState } from "react";
import { Heading, Button, Text, Flex, Icon } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import FormDialog from "../components/FormDialog";
import TransactionForm from "./TransactionForm";
import { MdOutlineEdit } from "react-icons/md";
import DeleteButton from "../components/DeleteButton";
import { transactionData } from "./../commons/data";
import format from "date-fns/format";

const getDataByDate = (data) => {
  const dataByDate = data.reduce((group, item) => {
    const { date } = item;
    group[date] = group[date] ?? [];
    group[date].push(item);
    return group;
  }, {});

  return dataByDate;
};

function TransactionList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState([...transactionData]);
  const [selectedItem, setSelectedItem] = useState(null);

  const dataByDate = getDataByDate(data);

  const handleOnClickEdit = (item) => {
    onOpen();
    setIsEditing(true);
    setSelectedItem(item);
  };

  const handleOnClickAdd = () => {
    onOpen();
    setIsEditing(false);
  };

  const handleOnUpdateData = (value) => {
    const newData = [...data, value];
    setData(newData);
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
        >
          <TransactionForm
            onClose={onClose}
            isEdit={isEditing}
            onUpdateData={handleOnUpdateData}
            selectedItem={selectedItem}
          />
        </FormDialog>
      </div>
      <div className='content'>
        <div>
          {Object.entries(dataByDate).map(([date, values], index) => {
            return (
              <React.Fragment key={index}>
                <div className='date'>
                  {format(new Date(date), "MMM dd, yyyy")}
                </div>
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
                          {`$${Number(item.amount).toFixed(2)}`}
                        </Text>
                        <Flex gap={2}>
                          <Icon
                            as={MdOutlineEdit}
                            cursor='pointer'
                            opacity={0.5}
                            _hover={{ color: "teal.500", opacity: 1 }}
                            onClick={() => handleOnClickEdit(item)}
                          />
                          <DeleteButton title='Transaction' />
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
