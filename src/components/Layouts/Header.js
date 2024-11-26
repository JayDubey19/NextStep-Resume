import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Text,
  Heading,
  Stack,
  Flex,
  Image,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import heroRobot from '../../images/rob.png'; // Add a futuristic robot SVG/image here
import spaceBg from '../../images/space.png'; // Space-themed background image

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle the redirection
  const handleBuildResumeClick = () => {
    navigate('/Main'); // Navigate to the main page (or other page)
  };

  return (
    <Box
      as="section"
      position="relative"
      width="100%"
      height={{ base: 'auto', md: '100vh' }}
      backgroundImage={`url(${spaceBg})`}
      backgroundSize="cover"
      backgroundPosition="center"
      color="white"
      overflow="hidden"
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        spacing={{ base: 8, md: 16 }}
        px={{ base: 6, md: 16 }}
        py={{ base: 12, md: 20 }}
        height="100%"
      >
        {/* Left Text Section */}
        <Stack flex={1} spacing={6} textAlign={{ base: 'center', md: 'left' }}>
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight="bold"
            lineHeight="1.2"
            bgGradient="linear(to-r, pink.500, cyan.400)"
            bgClip="text"
          >
            Elevate Your Professional Journey
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.200">
            Craft Beautifully Formatted Resumes that Make an Impact. Shine Bright with Templates Built for Success.
          </Text>
          <Stack direction="row" spacing={4} justify={{ base: 'center', md: 'start' }}>
            {/* Build Resume Button */}
            <Button
              size="lg"
              rounded="full"
              px={8}
              bg="pink.500"
              color="white"
              _hover={{ bg: 'pink.600', boxShadow: 'lg' }}
              onClick={handleBuildResumeClick} // Trigger redirection on click
            >
              Build Resume
            </Button>
            <Button
              size="lg"
              rounded="full"
              px={8}
              border="2px"
              borderColor="cyan.400"
              color="cyan.400"
              bg="transparent"
              _hover={{ bg: 'cyan.400', color: 'white', boxShadow: 'lg' }}
            >
              View Templates
            </Button>
          </Stack>
        </Stack>

        {/* Right Image Section */}
        <Flex flex={1} justify="center" align="center" position="relative">
          {/* Glowing Resumes */}
          {/* Robot Illustration */}
          <Image
            src={heroRobot}
            alt="Futuristic Robot"
            width="400px"
            height="400px"
            zIndex={1}
          />
        </Flex>
      </Stack>

      {/* Custom CSS Animations */}
      <style>
        {`
        @keyframes floating {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        `}
      </style>
    </Box>
  );
};

export default Header;
