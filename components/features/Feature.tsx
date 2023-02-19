import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiRocket } from "react-icons/bi";
import { RiMoonFoggyLine } from "react-icons/ri";
import { FaPaintBrush } from "react-icons/fa";
import { RxCode } from "react-icons/rx";

export default function Feature() {
  return (
    <Box py="50" as="section">
      {/* top headers */}
      <Box textAlign={"center"}>
        <Text color={"blue.500"} fontWeight="bold">
          Features
        </Text>
        <Heading fontWeight={"semibold"}>What you can expect?</Heading>
        <Text fontSize={"20"} py="3">
          A bundle of 220+ ready-to-use, responsive and accessible components
          with clever structured sourcecode files.
        </Text>
      </Box>
      <Container maxW={1200} mt="10">
        {/* 6 features  */}
        <Box>
          <SimpleGrid columns={2} spacing={10}>
            {/* feature 1 */}
            <Box>
              <HStack>
                <Box color={"blue.500"}>
                  <StarIcon w={10} h={10} />
                </Box>
                <Box>
                  <Heading fontSize={18}>220+ Components</Heading>
                  <Text>
                    All our components come with a light and dark color mode by
                    default.
                  </Text>
                </Box>
              </HStack>
              {/* feature 1 ends */}
            </Box>

            {/* feature 2 */}
            <Box>
              <HStack>
                {/* <StarIcon w={10} h={10} /> */}
                <Box color={"blue.500"}>
                  <BiRocket size={50} />
                </Box>
                <Box>
                  <Heading fontSize={18}>Themable</Heading>
                  <Text>
                    All our components come with a light and dark color mode by
                    default.
                  </Text>
                </Box>
              </HStack>
              {/* feature 2 ends */}
            </Box>

            {/* feature 3 */}
            <Box>
              <HStack>
                <Box color={"blue.500"}>
                  <RiMoonFoggyLine size={50} />
                </Box>
                <Box>
                  <Heading fontSize={18}>Light & Dark</Heading>
                  <Text>
                    All our components come with a light and dark color mode by
                    default.
                  </Text>
                </Box>
              </HStack>
              {/* feature 3 ends */}
            </Box>

            {/* feature 4 */}
            <Box>
              <HStack>
                <Box color={"blue.500"}>
                  <FaPaintBrush size="50" />
                </Box>
                <Box>
                  <Heading fontSize={18}>Themable</Heading>
                  <Text>
                    All our components come with a light and dark color mode by
                    default.
                  </Text>
                </Box>
              </HStack>
              {/* feature 4 ends */}
            </Box>

            {/* feature 5 */}
            <Box>
              <HStack>
                <Box color={"blue.500"}>
                  <RxCode size={50} />
                </Box>
                <Box>
                  <Heading fontSize={18}>Developer Friendly</Heading>
                  <Text>
                    All our components come with a light and dark color mode by
                    default.
                  </Text>
                </Box>
              </HStack>
              {/* feature 5 ends */}
            </Box>

            {/* feature 6 */}
            <Box>
              <HStack>
                <Box color={"blue.500"}>
                  <StarIcon w={10} h={10} />
                </Box>
                <Box>
                  <Heading fontSize={18}>Accessible</Heading>
                  <Text>
                    All our components come with a light and dark color mode by
                    default.
                  </Text>
                </Box>
              </HStack>
              {/* feature 6 ends */}
            </Box>
          </SimpleGrid>

          {/* 6 features ends */}
        </Box>
      </Container>
    </Box>
  );
}
