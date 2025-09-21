import { Container, Flex, Text, HStack, Button, useColorMode} from "@chakra-ui/react";
import { Moon, PlusSquareIcon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {coloreMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        {/* left side of Navbar */}
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textAlign={"center"}
          bgGradient={"linear(to-r, #498273, #663434)"}
          bgClip={"text"}
          className="font-gilroy"
        >
          <Link to={"/"}>RaitStore 🛒</Link>
        </Text>

        {/* right side of Navbar */}
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20}/>
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
              {coloreMode ==="light"? <Moon fontSize={20}/> : <Sun fontSize={20}/>}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
