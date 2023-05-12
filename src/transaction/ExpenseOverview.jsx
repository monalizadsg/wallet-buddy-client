import { Flex, Heading } from "@chakra-ui/react";
import ExpenseBarChart from "./ExpenseBarChart";

function ExpenseOverview() {
  return (
    <Flex flexDir='column' w='100%'>
      <div className='title'>
        <Heading as='h4' size='md'>
          Expense this month
        </Heading>
      </div>
      <Flex flexDir='column' className='content'>
        <Flex w='80%' alignSelf='center'>
          <ExpenseBarChart />
        </Flex>
        {/* No data at this moment. */}
      </Flex>
    </Flex>
  );
}

export default ExpenseOverview;
