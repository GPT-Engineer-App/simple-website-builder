import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">About Us</Heading>
      <Text fontSize="lg">
        Welcome to our website! We are dedicated to providing the best service possible.
      </Text>
      <Text fontSize="md">
        Our team is composed of experienced professionals who are passionate about what they do.
      </Text>
    </VStack>
  </Box>
);

export default About;