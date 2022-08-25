import { Grid, Text,Box, Image, Stack, Badge, Button, Heading, Center } from "@chakra-ui/react";
import NftCards from "../components/NftCards";

export default function Home() {
  return (
    <div>
      <Center> <Heading fontSize='30px'>All NFTs</Heading></Center>
      <Grid m={50} templateColumns='repeat(4, 1fr)' gap={4}>
       <NftCards img="https://cdn.crash.net/styles/article/s3/field/image/FOIRxGJXIAAzoKd_0.jpeg?itok=R1C9XEfb" heading="Hamilton" decription="The picture of sr.Luwis hamilton before race" price="1000"/>
       <NftCards img="https://cdn.crash.net/styles/article/s3/field/image/FOIRxGJXIAAzoKd_0.jpeg?itok=R1C9XEfb" heading="Hamilton" decription="The picture of sr.Luwis hamilton before race" price="1000"/>
       <NftCards img="https://cdn.crash.net/styles/article/s3/field/image/FOIRxGJXIAAzoKd_0.jpeg?itok=R1C9XEfb" heading="Hamilton" decription="The picture of sr.Luwis hamilton before race" price="1000"/>
       <NftCards img="https://cdn.crash.net/styles/article/s3/field/image/FOIRxGJXIAAzoKd_0.jpeg?itok=R1C9XEfb" heading="Hamilton" decription="The picture of sr.Luwis hamilton before race" price="1000"/>
       <NftCards img="https://cdn.crash.net/styles/article/s3/field/image/FOIRxGJXIAAzoKd_0.jpeg?itok=R1C9XEfb" heading="Hamilton" 
       decription="The picture of sr.Luwis hamilton before race" price="1000"/>
      </Grid>

    </div>
  );
}
