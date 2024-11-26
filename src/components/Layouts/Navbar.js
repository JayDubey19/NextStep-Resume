import {
    Stack,
    Flex,
    Heading,
    Spacer,
    HStack,
    Text,
    Button,
    useColorMode,
    IconButton,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { FaMoon, FaSun, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <Stack
            p={5}
            as="header"
            bg={isDark ? "gray.800" : "gray.50"}
            color={isDark ? "whiteAlpha.900" : "gray.800"}
            shadow="md"
            position="sticky"
            top={0}
            zIndex={10}
        >
            <Flex w="full" alignItems="center">
                {/* Logo */}
                <Heading
                    as="h3"
                    ml={{ base: 2, sm: 8 }}
                    size="lg"
                    fontWeight="thin"
                    color={isDark ? "cyan.400" : "purple.500"}
                    fontFamily="Raleway "
                >
                    NextStep Resume
                </Heading>

                <Spacer />

                {/* Navigation Links */}
                <HStack
                    spacing={10}
                    mr={{ base: 2, sm: 8 }}
                    as="nav"
                    display={{ base: "none", md: "flex" }}
                    fontFamily="Poppins"
                >
                    <Text as="a" href="/" fontSize="lg" _hover={{ textDecoration: "underline" }}>
                        Home
                    </Text>
                    <Text as="a" href="#templates" fontSize="lg" _hover={{ textDecoration: "underline" }}>
                        Templates
                    </Text>
                    
                    <Button colorScheme="purple" fontWeight="medium">
                        Contact
                    </Button>
                </HStack>

                {/* Dark Mode Toggle */}
                <IconButton
                    aria-label="Toggle Dark Mode"
                    icon={isDark ? <FaSun /> : <FaMoon />}
                    onClick={toggleColorMode}
                    variant="ghost"
                    fontSize="20px"
                    ml={4}
                />

                {/* Social Links (Optional) */}
                <HStack
                    spacing={4}
                    display={{ base: "none", md: "flex" }}
                    ml={4}
                >
                   
                    <IconButton
                        as="a"
                        href="https://www.linkedin.com/in/jay-dubey-8839aa1a2/"
                        icon={<FaLinkedin />}
                        variant="ghost"
                        aria-label="LinkedIn"
                        color={isDark ? "whiteAlpha.900" : "gray.600"}
                        _hover={{ color: isDark ? "cyan.400" : "purple.500" }}
                    />
                    <IconButton
                        as="a"
                        href="https://github.com/JayDubey19"
                        icon={<FaGithub />}
                        variant="ghost"
                        aria-label="GitHub"
                        color={isDark ? "whiteAlpha.900" : "gray.600"}
                        _hover={{ color: isDark ? "cyan.400" : "purple.500" }}
                    />
                </HStack>
            </Flex>

            {/* Mobile Navigation */}
            <HStack
                spacing={4}
                display={{ base: "flex", md: "none" }}
                mt={4}
                justify="center"
            >
                <Text as="a" href="#" fontSize="lg" _hover={{ textDecoration: "underline" }}>
                    Home
                </Text>
                <Text as="a" href="#templates" fontSize="lg" _hover={{ textDecoration: "underline" }}>
                    Templates
                </Text>
                <Text as="a" href="#about" fontSize="lg" _hover={{ textDecoration: "underline" }}>
                    About
                </Text>
            </HStack>
        </Stack>
    );
};

export default Navbar;
