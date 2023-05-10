import { Flex, Box, Progress, Text } from "@chakra-ui/react";
function ProgressBar() {
  return (
    <Flex justifyContent='space-between' alignItems='center'>
      <Box width='90% '>
        <Progress value={80} />
      </Box>
      <Text fontSize='lg'>80%</Text>
    </Flex>
  );
}

export default ProgressBar;
