import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  TabIndicator,
  Tab,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { MdFoodBank } from "react-icons/md";
import { savingsData } from "../commons/data";
import PropTypes from "prop-types";

function SavingsStatus() {
  return (
    <Tabs position='relative' variant='unstyled'>
      <TabList>
        <Tab>Active</Tab>
        <Tab>Completed</Tab>
      </TabList>
      <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
      <TabPanels>
        <SavingTabPanel item={savingsData} />
        <SavingTabPanel item={[]} />
      </TabPanels>
    </Tabs>
  );
}

function SavingTabPanel({ item }) {
  return (
    <TabPanel>
      {item &&
        item.map((item, index) => (
          <Flex
            key={index}
            justifyContent='space-between'
            alignItems='center'
            p={2}
            style={{
              backgroundColor: index % 2 != 0 ? "#AFF2D7" : "unset",
              borderRadius: 6,
            }}
          >
            <Flex gap={5} alignItems='center'>
              <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='Call Sage'
                fontSize='30px'
                borderRadius='50%'
                icon={<MdFoodBank />}
              />
              <Flex flexDir='column'>
                <Text as='b'>{item.name}</Text>
                <Text color='gray.500'>{`Monthly saving: $${item.amount}`}</Text>
              </Flex>
            </Flex>
            <Flex>
              <Text as='b'>
                {`$${item.savedAmount.toFixed(2)}`}
                <span style={{ color: "gray", opacity: 0.8 }}>
                  {`/$${item.targetAmount.toFixed(2)}`}
                </span>
              </Text>
            </Flex>
          </Flex>
        ))}
      {!item.length && <Text>No savings data at the moment</Text>}
    </TabPanel>
  );
}

SavingTabPanel.propTypes = {
  item: PropTypes.array,
};

export default SavingsStatus;
