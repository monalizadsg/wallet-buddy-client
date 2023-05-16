import { Flex, Box, Progress, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

function ProgressBar({ value }) {
  return (
    <Flex justifyContent='space-between' alignItems='center'>
      <Box width='90% '>
        <Progress value={value} />
      </Box>
      <Text fontSize='lg'>{`${value}%`}</Text>
    </Flex>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number,
};

export default ProgressBar;
