import {
  Flex,
  Stack,
  Card,
  CardBody,
  Text,
  IconButton,
  Icon,
  Box,
} from "@chakra-ui/react";
import ProgressBar from "../components/ProgressBar";
import { getPercentage } from "../commons/utils";
import DeleteButton from "../components/DeleteButton";

import { MdOutlineEdit, MdFoodBank } from "react-icons/md";
import PropTypes from "prop-types";

function SavingList({ onOpen, setIsEditing, readOnly, data }) {
  const handleOnClickEdit = () => {
    onOpen();
    setIsEditing(true);
  };

  const list = data.map((item, index) => (
    <Card key={index} bgColor='gray.300'>
      <CardBody>
        <Flex justifyContent='space-between'>
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
              <Text>{item.name}</Text>
              <Text>
                {`$${item.savedAmount.toFixed(2)} `}
                <span style={{ color: "gray", opacity: 0.8 }}>
                  {`of $${item.targetAmount.toFixed(2)}`}
                </span>
              </Text>
            </Flex>
          </Flex>
          {!readOnly && (
            <Flex gap={1}>
              <Icon
                as={MdOutlineEdit}
                cursor='pointer'
                opacity={0.8}
                _hover={{ color: "teal.500", opacity: 1 }}
                onClick={handleOnClickEdit}
              />
              <DeleteButton title='Saving Plan' />
            </Flex>
          )}
        </Flex>
        <Box width='100%' mt={2}>
          <ProgressBar
            value={getPercentage(item.savedAmount, item.targetAmount)}
          />
        </Box>
      </CardBody>
    </Card>
  ));

  return (
    <Flex flexDir='column'>
      <Stack spacing={4}>{list}</Stack>
    </Flex>
  );
}

SavingList.defaultProps = {
  readOnly: false,
  data: [],
};

SavingList.propTypes = {
  onOpen: PropTypes.func,
  setIsEditing: PropTypes.func,
  readOnly: PropTypes.bool,
  data: PropTypes.array,
};

export default SavingList;
