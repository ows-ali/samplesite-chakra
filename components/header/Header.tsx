"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  SearchIcon,
  DeleteIcon,
  MoonIcon,
} from "@chakra-ui/icons";
import React from "react";

export default function Header() {
  return (
    <Box pt={5}>
      {/* left area */}
      <Flex justifyContent={"space-around"} alignItems={"center"}>
        <Box>
          <HStack>
            <Image
              src="/images/Logo.webp"
              alt="logo"
              //   w={"24"}
              //   h={"12"}
              //   pb="2"
            />
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
          <Box pl="15" as="span">
            <SearchIcon w="25" h="25" />
          </Box>
          <Box px="15" as="span">
            <MoonIcon w="25" h="25" />
          </Box>

          <Link href="http://piaic.org/" target={"_blank"}>
            <Button variant={"outline"}>Go to Piaic</Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
