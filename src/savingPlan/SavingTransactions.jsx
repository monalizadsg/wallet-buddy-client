import { Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { MdFoodBank } from "react-icons/md";
import { savingsTranxData } from "../commons/data";

function SavingTransactions() {
  return (
    <Flex flexDir='column' p={6} gap={2}>
      <Heading as='h4' size='md'>
        Saving History
      </Heading>
      <Flex flexDir='column' mt={2} gap={3}>
        {savingsTranxData.map((item, index) => (
          <Flex justifyContent='space-between' alignItems='center' key={index}>
            <Flex
              alignItems='center'
              // border='1px solid red'
            >
              <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='Call Sage'
                fontSize='30px'
                borderRadius='50%'
                mr={3}
                icon={<MdFoodBank />}
              />
              <Flex flexDir='column'>
                <Text fontSize='sm'>{item.name}</Text>
                <Text fontSize='xs'>{item.date}</Text>
              </Flex>
            </Flex>
            <Text fontSize='sm'>{`$${item.amount.toFixed(2)}`}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default SavingTransactions;
