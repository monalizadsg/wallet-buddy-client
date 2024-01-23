import { useState } from "react";
import {
  Flex,
  Stack,
  VStack,
  Heading,
  Text,
  Box,
  Button,
  HStack,
} from "@chakra-ui/react";
import PasswordInput from "../components/PasswordInput";
import { useNavigate } from "react-router-dom";
import TextField from "../components/TextField";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = user;
    // TODO: update authentication
  };

  return (
    <>
      <Flex w="100%" h="100vh" justifyContent="center" bgColor="#060D21">
        <Stack mt="5%" alignItems="center">
          <Heading as="h3" size="lg" color="#fff">
            Welcome!
          </Heading>
          <Box
            borderWidth="1px"
            p={8}
            borderRadius={10}
            boxShadow="xs"
            marginTop={"10px"}
            bgColor="#fff"
          >
            <Stack
              flexDir="column"
              mb="2"
              justifyContent="center"
              alignItems="center"
            >
              <Box mt={2}>
                <form onSubmit={handleSubmit}>
                  <VStack spacing={2}>
                    <TextField
                      label="Username"
                      name="username"
                      type="text"
                      placeholder="Username"
                      onChange={handleInputChange}
                      isRequired
                    />
                    <PasswordInput onChange={handleInputChange} />
                    {errors && (
                      <Text style={{ color: "red", fontWeight: 600 }}>
                        {errors.username}
                      </Text>
                    )}
                  </VStack>
                  <HStack>
                    <Button
                      bgColor="#26CA99"
                      width="full"
                      mt={10}
                      borderRadius={8}
                      type="submit"
                      color="#fff"
                      _hover={{ bgColor: "#16795b" }}
                    >
                      Sign In
                    </Button>
                    <Button
                      width="full"
                      mt={10}
                      borderRadius={8}
                      type="submit"
                      color="#26CA99"
                      _hover={{ color: "#16795b" }}
                      variant="ghost"
                    >
                      Create Account
                    </Button>
                  </HStack>
                </form>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export default Login;
