import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Our Website</Heading>
        <Text fontSize="lg">Explore our site using the navigation bar above.</Text>
      </VStack>
    </Container>
  );
};

export default Index;