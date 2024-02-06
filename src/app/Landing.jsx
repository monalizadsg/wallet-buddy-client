import { Button, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <Flex
      w="100%"
      h="100vh"
      flexDir="column"
      alignItems="center"
      bgColor="#060D21"
    >
      <Heading as="h2" size="xl" mt={50}>
        Wallet Buddy
      </Heading>
      <Button
        bgColor="#26CA99"
        mt={10}
        borderRadius={8}
        color="#fff"
        _hover={{ bgColor: "#16795b" }}
        onClick={() => navigate("/login")}
      >
        Get Started
      </Button>
    </Flex>
  );
}

export default Landing;
