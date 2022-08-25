import {
  Heading,
  Flex,
  Spacer,
  ButtonGroup,
  Button,
  Grid,
  Center,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// ChakraUI
import { extendTheme } from "@chakra-ui/react"
import "@fontsource/silkscreen"

const theme = extendTheme({
  fonts: {
    heading: 'Silkscreen',
  },
});

const Navbar = () => {
  return (
    <div>
      <nav>
        <Center bg="red.400" m={50} mb={10} mt={7} border="2px" p={3} borderRadius="50px">
          <Heading ml={5} fontSize="2.6rem">
            Formula verse
          </Heading>

          <Spacer />

          <Flex>
            <ButtonGroup>
              <Link href="/">
                <Button
                  colorScheme="red"
                  bg="black"
                  color="white"
                  boxShadow="lg"
                  borderRadius="50px"
                  size="md"
                  m={2}
                >
                  Home
                </Button>
              </Link>
              <Spacer />

              <Link href="/create-items">
                <Button
                  colorScheme="red"
                  bg="black"
                  color="white"
                  boxShadow="lg"
                  borderRadius="50px"
                  size="md"
                  m={2}
                >
                  Sale NFT
                </Button>
              </Link>
              <Spacer />

              <Link href="/My-items">
                <Button
                  colorScheme="red"
                  bg="black"
                  color="white"
                  boxShadow="lg"
                  borderRadius="50px"
                  size="md"
                  m={2}
                >
                  My Collaction
                </Button>
              </Link>
              <Spacer />

              <Link href="/Nft-dashboard">
                <Button
                  colorScheme="red"
                  bg="black"
                  color="white"
                  boxShadow="lg"
                  borderRadius="50px"
                  size="md"
                  m={2}
                >
                  NFT Dashboard
                </Button>
              </Link>
            </ButtonGroup>
          </Flex>
          <Box ml='30px'>
            <ConnectButton />
          </Box>
        </Center>
      </nav>
    </div>
  );
};

export default Navbar;
