import React, { useState, useEffect } from "react";
import { Heading, Button, Text, Flex, Icon } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import FormDialog from "../components/FormDialog";
import TransactionForm from "./TransactionForm";
import { MdOutlineEdit } from "react-icons/md";
import DeleteButton from "../components/DeleteButton";
import format from "date-fns/format";
import { getAllTransactions, getCategories } from "./transactionService";
import { getUserId } from "../commons/utils";
import { CustomToast } from "../commons/utils";

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
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [categories, setCategories] = useState([]);
  const { addToast } = CustomToast();

  const dataByDate = getDataByDate(data);
  const userId = getUserId();

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    };
    fetchCategories();
  }, []);

  const fetchTransactions = async () => {
    const transactionData = await getAllTransactions(userId);
    // console.log(transactionData);
    setData(transactionData);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleOnClickEdit = (item) => {
    onOpen();
    setIsEditing(true);
    setSelectedItem(item);
  };

  const handleOnClickAdd = () => {
    onOpen();
    setIsEditing(false);
  };

  const handleOnCreateSuccess = () => {
    fetchTransactions();
    handleOnClose();
    addToast({
      title: "Transaction has been added!",
      type: "success",
    });
  };

  const handleOnUpdateSuccess = () => {
    fetchTransactions();
    handleOnClose();
    addToast({
      title: "Transaction has been updated!",
      type: "success",
    });
  };

  const handleOnClose = () => {
    setSelectedItem(null);
    onClose();
  };

  return (
    <Flex flexDir="column" w="100%">
      <div className="title">
        <Heading as="h4" size="md">
          Transactions
        </Heading>
        <Button
          onClick={handleOnClickAdd}
          colorScheme="teal"
          variant="outline"
          size="xs"
        >
          Add
        </Button>
        <FormDialog
          title={`${isEditing ? "Edit" : "Add"} Transaction`}
          isOpen={isOpen}
          onClose={handleOnClose}
        >
          <TransactionForm
            categories={categories}
            onClose={handleOnClose}
            isEdit={isEditing}
            onUpdateData={
              selectedItem ? handleOnUpdateSuccess : handleOnCreateSuccess
            }
            selectedItem={selectedItem}
          />
        </FormDialog>
      </div>
      <div className="content">
        <div>
          {Object.entries(dataByDate).map(([date, values], index) => {
            return (
              <React.Fragment key={index}>
                <div className="date">
                  {format(new Date(date), "MMM dd, yyyy")}
                </div>
                {values.map((item, index) => {
                  return (
                    <Flex
                      className="item"
                      key={index}
                      style={{
                        backgroundColor: "#EEEFEA",
                        // border: "1px solid red",
                        borderRadius: 10,
                        marginBottom: 12,
                      }}
                    >
                      <div className="item-details">
                        <span className="icon"></span>
                        <div>
                          <Text fontSize="sm" as="b">
                            {item.description}
                          </Text>
                          <Text fontSize="xs">{item.category.name}</Text>
                        </div>
                      </div>
                      <Flex className="item-amount" alignItems="center" gap={6}>
                        <Text fontSize="sm" as="b">
                          {`$${Number(item.amount).toFixed(2)}`}
                        </Text>
                        <Flex gap={2}>
                          <Icon
                            as={MdOutlineEdit}
                            cursor="pointer"
                            opacity={0.5}
                            _hover={{ color: "teal.500", opacity: 1 }}
                            onClick={() => handleOnClickEdit(item)}
                          />
                          <DeleteButton title="Transaction" />
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
