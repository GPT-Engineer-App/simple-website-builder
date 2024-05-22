import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex maxW="container.lg" mx="auto" align="center">
        <Heading as="h1" size="lg" color="white">
          MyWebsite
        </Heading>
        <Spacer />
        <Flex>
          <Link as={NavLink} to="/" p={2} color="white" _hover={{ textDecoration: "none", bg: "teal.600" }}>
            Home
          </Link>
          <Link as={NavLink} to="/about" p={2} color="white" _hover={{ textDecoration: "none", bg: "teal.600" }}>
            About
          </Link>
          <Link as={NavLink} to="/contact" p={2} color="white" _hover={{ textDecoration: "none", bg: "teal.600" }}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;