import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { IoIosSpeedometer } from "react-icons/io";
import { FaCommentDollar } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";

export default function Highlights() {
  return (
    <Box py="50" as="section">
      {/* top headers */}
      <Box textAlign={"center"}>
        <Text color={"blue.500"} fontWeight="bold">
          Highlights
        </Text>
        <Heading fontWeight={"semibold"}>Why Us?</Heading>
        <Text fontSize={"20"} py="3">
          Because these beautiful and responsive React components will help you
          realize your next idea in no time.
        </Text>
      </Box>
      <Container maxW={1200}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={5}>
          <Card align="center">
            <CardHeader>
              <Center color="blue.500">
                <IoIosSpeedometer size={80} />
              </Center>
              <Heading size="md" mt="5">
                {" "}
                Speed up workflow
              </Heading>
            </CardHeader>
            <CardBody>
              <Text align={"center"}>
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">View here</Button>
            </CardFooter>
          </Card>
          <Card align="center">
            <CardHeader>
              <Center color="blue.500">
                <FaCommentDollar size={80} />
              </Center>
              <Heading size="md" mt="5">
                Save good money
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign="center">
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">View here</Button>
            </CardFooter>
          </Card>
          <Card align="center">
            <CardHeader>
              <Center color="blue.500">
                <BsFillGearFill size={80} />
              </Center>
              <Heading size="md" mt="5">
                Easily customizable
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign="center">
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">View here</Button>
            </CardFooter>
          </Card>
          <Card align="center">
            <CardHeader>
              <Center color="blue.500">
                <MdSupportAgent size={80} />
              </Center>
              <Heading size="md" mt="5">
                Support Us
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign="center">
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">View here</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
