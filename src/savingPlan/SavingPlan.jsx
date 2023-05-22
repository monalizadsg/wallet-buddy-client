import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import SavingPlanList from "./SavingPlanList";

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
          <SavingPlanList />
        </Flex>
        <Flex flex='35%' flexDir='column'>
          <h1>Saving Goals here</h1>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SavingPlan;
