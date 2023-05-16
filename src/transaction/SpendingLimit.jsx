import {
  Flex,
  Heading,
  Button,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

const limitData = {
  expenseTotal: 2813,
  limitAmount: 3200,
};

function SpendingLimit() {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = "/budget";
    navigate(path);
  };

  const getPercentage = () => {
    const { expenseTotal, limitAmount } = limitData;
    const percentage = (expenseTotal / limitAmount) * 100;
    return Math.round(percentage);
  };

  return (
    <Flex flexDir='column' w='100%'>
      <Flex className='title'>
        <Heading as='h4' size='md'>
          Spending Limits
        </Heading>
        <Button
          onClick={() => routeChange()}
          colorScheme='teal'
          variant='outline'
          size='xs'
        >
          Edit
        </Button>
      </Flex>
      <Flex flexDir='column' className='content'>
        <Text fontSize='sm' color='gray.600'>
          Monthly Limit
        </Text>
        <Flex alignItems='center'>
          <Text as='b' mr={2} fontSize='xl'>
            {`$${limitData.expenseTotal}.00`}
          </Text>
          <Text opacity={0.6}>of {`$${limitData.limitAmount}.00`}</Text>
        </Flex>
        <ProgressBar percentage={getPercentage()} />
        {getPercentage() >= 80 && (
          <Alert status='error' className='alert-msg'>
            <AlertIcon />
            <Text fontSize='sm'>
              Your spending limit has almost reached the limit
            </Text>
          </Alert>
        )}
      </Flex>
    </Flex>
  );
}

export default SpendingLimit;
