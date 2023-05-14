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

function SpendingLimit() {
  const navigate = useNavigate();

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
            $1,540.00
          </Text>
          <Text opacity={0.8}>of $1,600.00</Text>
        </Flex>
        <ProgressBar />
        {/* TODO: show only alert text if almost reach the limit*/}
        <Alert status='error' className='alert-msg'>
          <AlertIcon />
          <Text fontSize='sm'>
            Your spending limit has almost reached the limit
          </Text>
        </Alert>
      </Flex>
    </Flex>
  );
}

export default SpendingLimit;
