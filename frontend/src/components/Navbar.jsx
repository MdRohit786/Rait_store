import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Add this line
import { CiSquarePlus,FaMoon,FasSun } from "react-icons/ci";
const Navbar = () => {


    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1400px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22px", sm: "24px" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, red.300, blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/products"}>Product Store 🛒 </Link>
        </Text>

        <HStack spacing={8} alignItems={"center"}>
            <Link to={"/create"}>
                <Button fontSize={35}>
                    <CiSquarePlus /> 
                </Button>
            </Link>
            <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <FaMoon /> : <FasSun />}
            </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
