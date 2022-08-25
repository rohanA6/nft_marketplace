import { Grid, Text,Box, Image, Badge, Button } from "@chakra-ui/react";


const NftCards = (props) => {
    return ( 
        <Grid m={50} templateColumns='repeat(5, 1fr)' gap={4}>
            <Box w="300px" rounded='20px' overflow='hidden' boxShadow='md' bg='gray.100'>
            <Image src= {props.img} alt="nft" />

            <Box p={3}>
                
            <Text  color='red' as='h2' fontWeight='semibold' fontSize='xl' my={2}>{props.heading}</Text>
            <Text  mb='10px' isTruncated color='gray.400'> {props.decription}</Text>

            <Badge fontSize='15px' borderRadius='full' px='2' colorScheme='red' >
                {props.price} MATIC
            </Badge>
            <Button ml={90} borderRadius='full' colorScheme='red' size='lg'>
                Buy
            </Button>
            
            </Box>
            </Box>
      </Grid>
     );
}
 
export default NftCards;