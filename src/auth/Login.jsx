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
import { login, register } from "./authService";

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

  const handleOnSubmit = async (event, btnClicked) => {
    event.preventDefault();
    const { username, password } = user;

    // validate fields
    if (!username || !password) {
      console.log("Username or password is empty. Please enter valid input!");
      setErrors("Username or password is empty. Please enter valid input!");
    }

    if (btnClicked == "register") {
      try {
        await register(user);
        navigate("/dashboard");
      } catch (e) {
        setErrors(e.response.data.message);
      }
    } else {
      try {
        await login(user);
        navigate("/dashboard");
      } catch (e) {
        setErrors(e.response.data.message);
      }
    }
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
                <form onSubmit={handleOnSubmit}>
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
                      <Text
                        style={{ color: "red", fontWeight: 400, fontSize: 12 }}
                      >
                        {errors}
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
                      onClick={(e) => handleOnSubmit(e, "login")}
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
                      onClick={(e) => handleOnSubmit(e, "register")}
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
