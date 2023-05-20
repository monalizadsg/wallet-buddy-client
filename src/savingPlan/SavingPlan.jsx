import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";

function SavingPlan() {
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
          <h1>Add Saving Plan here</h1>
        </Flex>
        <Flex flex='35%' flexDir='column'>
          <h1>Saving Goals here</h1>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SavingPlan;
