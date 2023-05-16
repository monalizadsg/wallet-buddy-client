import { Flex, Box, Progress, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

function ProgressBar({ percentage }) {
  return (
    <Flex justifyContent='space-between' alignItems='center'>
      <Box width='90% '>
        <Progress value={percentage} />
      </Box>
      <Text fontSize='lg'>{`${percentage}%`}</Text>
    </Flex>
  );
}

ProgressBar.propTypes = {
  percentage: PropTypes.number,
};

export default ProgressBar;
