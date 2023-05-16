import { Flex, Heading, Text } from "@chakra-ui/react";
import ExpenseBarChart from "./ExpenseBarChart";
import { expenseData } from "../commons/utils";

function ExpenseOverview() {
  const isEmpty = false; // TODO: update the logic of this code
  return (
    <Flex flexDir='column' w='100%'>
      <div className='title'>
        <Heading as='h4' size='md'>
          Expense this month
        </Heading>
      </div>
      <Flex flexDir='column' className='content'>
        {!isEmpty ? (
          <Flex w='80%' flexDir='column' gap={10} alignSelf='center'>
            <ExpenseBarChart />
            <Flex w='60%' flexDir='column' alignSelf='center'>
              {expenseData.map((data, index) => (
                <Flex key={index} justifyContent='space-between'>
                  <Text as='b' color={"gray.500"}>
                    {data.category}
                  </Text>
                  <Text>${data.total}</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        ) : (
          <Flex>
            <Text fontSize='sm'>No data at this moment.</Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default ExpenseOverview;
