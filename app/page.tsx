"use client";
import Header from "@/components/header/Header";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box pt={5}>
      {/* left area */}
      <Flex justifyContent={"space-around"} alignItems={"center"}>
        <Box>
          <HStack>
            <Image src="/images/Logo.webp" alt="logo" />
            <List>
              <HStack align={"center"} spacing={10} fontWeight="bold" ml="40px">
                <ListItem>Home</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Contact</ListItem>
              </HStack>
            </List>
          </HStack>
        </Box>
        {/* right area */}
        <Box>
          <Button variant={"outline"}>Go to Piaic</Button>
        </Box>
      </Flex>
    </Box>
  );
}
