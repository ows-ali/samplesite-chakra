"use client";

import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { SearchIcon, MoonIcon } from "@chakra-ui/icons";
import React from "react";

export default function Header() {
  return (
    <Box as="header" position={"sticky"} top="0" zIndex={1}>
      {/* left area */}
      <Flex
        justifyContent={"space-around"}
        alignItems={"center"}
        bg="white"
        py="5"
      >
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
