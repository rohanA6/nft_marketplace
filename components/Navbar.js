import {
  Heading,
  Flex,
  Spacer,
  ButtonGroup,
  Button,
  Grid,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Center>
        <Grid>

          <Center><Heading mt={10} mb={5} fontSize="6xl">Formula verse</Heading></Center>

          <Spacer />

          <Flex mb={10}>

            <ButtonGroup>
              <Link href="/">
                <Button>Home</Button>
              </Link>
              <Spacer />
              <Link href="/create-items">
                <Button>Sale NFT</Button>
              </Link>
              <Spacer />
              <Link href="/My-items">
                <Button>My NFT</Button>
              </Link>
              <Spacer />
              <Link href="/Nft-dashboard">
                <Button>NFT Dashboard</Button>
              </Link>
            </ButtonGroup>

          </Flex>

        </Grid>
      </Center>
    </nav>
  );
};

export default Navbar;
