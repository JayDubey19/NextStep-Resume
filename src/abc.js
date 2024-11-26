import React, { useEffect } from "react";
import { Box, Flex, Heading, Text, VStack, Icon, Button } from "@chakra-ui/react";
import { FaMousePointer, FaPencilAlt, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);

const Abc = () => {
  // Ensure the page scrolls to the top on component load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }, []);

  return (
    <Box
      textAlign="center"
      bg={{ base: "gray.100", dark: "gray.800" }}
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={0}
    >
      {/* Heading */}
      <Heading as="h1" size="2xl" mb={8} color={{ base: "purple.500", dark: "purple.300" }}>
        Build Your Resume in 3 Easy Steps
      </Heading>

      {/* Steps */}
      <Flex
        direction={["column", "row"]}
        justify="center"
        align="center"
        gap={10}
        w="full"
        maxW="900px"
        px={4}
      >
        {/* Step 1 */}
        <MotionBox
          p={6}
          bg={{ base: "white", dark: "gray.700" }}
          shadow="md"
          borderRadius="lg"
          border="1px solid"
          borderColor={{ base: "gray.200", dark: "gray.600" }}
          textAlign="center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <VStack spacing={4}>
            <Icon as={FaMousePointer} boxSize={10} color="purple.500" />
            <Heading as="h3" size="md" color={{ base: "purple.600", dark: "purple.300" }}>
              Step 1
            </Heading>
            <Text color={{ base: "gray.600", dark: "gray.300" }}>
              Go to "Build Resume" and get started.
            </Text>
          </VStack>
        </MotionBox>

        {/* Step 2 */}
        <MotionBox
          p={6}
          bg={{ base: "white", dark: "gray.700" }}
          shadow="md"
          borderRadius="lg"
          border="1px solid"
          borderColor={{ base: "gray.200", dark: "gray.600" }}
          textAlign="center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
        >
          <VStack spacing={4}>
            <Icon as={FaPencilAlt} boxSize={10} color="purple.500" />
            <Heading as="h3" size="md" color={{ base: "purple.600", dark: "purple.300" }}>
              Step 2
            </Heading>
            <Text color={{ base: "gray.600", dark: "gray.300" }}>
              Fill in all the necessary details.
            </Text>
          </VStack>
        </MotionBox>

        {/* Step 3 */}
        <MotionBox
          p={6}
          bg={{ base: "white", dark: "gray.700" }}
          shadow="md"
          borderRadius="lg"
          border="1px solid"
          borderColor={{ base: "gray.200", dark: "gray.600" }}
          textAlign="center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          <VStack spacing={4}>
            <Icon as={FaDownload} boxSize={10} color="purple.500" />
            <Heading as="h3" size="md" color={{ base: "purple.600", dark: "purple.300" }}>
              Step 3
            </Heading>
            <Text color={{ base: "gray.600", dark: "gray.300" }}>
              Download your beautifully crafted resume.
            </Text>
          </VStack>
        </MotionBox>
      </Flex>

      {/* Single Button Below Steps */}
      <Button
        as={Link}
        to="/Main"
        colorScheme="purple"
        size="lg"
        mt={10}
        px={10}
        shadow="md"
        _hover={{ transform: "scale(1.1)", transition: "0.3s ease" }}
      >
        Start Building Your Resume
      </Button>
    </Box>
  );
};

export default Abc;
