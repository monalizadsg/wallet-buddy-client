import { Flex, Heading } from "@chakra-ui/react";
import Header from "../components/Header";
import SavingPlanList from "./SavingPlanList";
import SavingsStatus from "./SavingsStatus";

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
          <Flex
            flexDir='column'
            p={6}
            gap={2}
            w='100%'
            // border='1px solid red'
            borderBottom='2px solid rgb(226, 226, 226)'
          >
            <Heading as='h4' size='md'>
              Savings Status
            </Heading>
            <SavingsStatus />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SavingPlan;
