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
import { getPercentage } from "../commons/utils";

const limitData = {
  expense: 2813,
  limit: 3200,
};

function SpendingLimit() {
  const navigate = useNavigate();
  const percentage = getPercentage(limitData.expense, limitData.limit);

  const routeChange = () => {
    let path = "/budget";
    navigate(path);
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
            {`$${limitData.expense}.00`}
          </Text>
          <Text opacity={0.6}>of {`$${limitData.limit}.00`}</Text>
        </Flex>
        <ProgressBar value={percentage} />
        {percentage >= 80 && (
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
