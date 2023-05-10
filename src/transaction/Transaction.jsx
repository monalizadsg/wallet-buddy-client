import { Flex } from "@chakra-ui/react";
import Header from "./../components/Header";
import TransactionList from "./TransactionList";
import SpendingLimit from "./SpendingLimit";
import ExpenseOverview from "./ExpenseOverview";
import "./Transaction.scss";

function Transaction() {
  return (
    <Flex flex='80%' flexDir='column' className='transaction-container'>
      <Header />
      <Flex flex='1'>
        <Flex
          flex='55%'
          p={6}
          borderRight='2px solid rgb(226, 226, 226)'
          className='left-col'
        >
          <TransactionList />
        </Flex>
        <Flex flex='35%' flexDir='column' className='right-col'>
          <Flex
            p={6}
            borderBottom='2px solid rgb(226, 226, 226)'
            // border='1px solid red'
          >
            <SpendingLimit />
          </Flex>
          <Flex p={6} flex={1}>
            <ExpenseOverview />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Transaction;
