/* eslint-disable no-unused-vars */
import React from "react";
import { Avatar, Box, Stack, VStack, Text } from "@chakra-ui/react";

const avatarSrc = "https://avatars.githubusercontent.com/u/98731190?s=96&v=4";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in india, we provide our guidance
            at a very low price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
      <VStack>
        <Text fontSize={"14"} textAlign={"center"}>
          Copyright©2024, All right reserved
        </Text>
        <Text fontSize={"10"} mt={"-2"}>
          Designed by: Manish Gupta
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
