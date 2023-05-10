import { Flex, Heading } from "@chakra-ui/react";

function ExpenseOverview() {
  return (
    <Flex flexDir='column' w='100%'>
      <div className='title'>
        <Heading as='h4' size='md'>
          Expense this month
        </Heading>
      </div>
      <div className='content'>No data at this moment.</div>
    </Flex>
  );
}

export default ExpenseOverview;
