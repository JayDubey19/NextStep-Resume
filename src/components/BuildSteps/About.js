import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { useResume } from "../../Context";
import ImageUpload from "../ImageUploadButton/ImageUpload.component";

const About = () => {
  const { about, setAbout } = useResume();
  const { colorMode } = useColorMode(); // Using colorMode hook to access current theme

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAbout({ ...about, [name]: value });
  };

  return (
    <Stack
      spacing={4}
      mb={2}
      bg={colorMode === "light" ? "gray.50" : "gray.800"} // Background color based on theme
      p={4}
      borderRadius="md"
      boxShadow="sm"
    >
      {about.picture ? (
        <Button
          onClick={() => {
            setAbout({ ...about, picture: "" });
          }}
          colorScheme="red"
          variant="outline"
        >
          Remove Image
        </Button>
      ) : (
        <ImageUpload />
      )}

      <HStack spacing={6}>
        <FormControl>
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <Input
            onChange={(e) => handleChange(e)}
            name="name"
            id="name"
            type="text"
            variant="filled"
            placeholder="Full Name"
            bg={colorMode === "light" ? "white" : "gray.700"} // Input background color based on theme
            color={colorMode === "light" ? "gray.700" : "white"} // Input text color based on theme
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="role">Role</FormLabel>
          <Input
            onChange={(e) => handleChange(e)}
            name="role"
            id="role"
            type="text"
            variant="filled"
            placeholder="Role"
            bg={colorMode === "light" ? "white" : "gray.700"}
            color={colorMode === "light" ? "gray.700" : "white"}
          />
        </FormControl>
      </HStack>

      <HStack spacing={6}>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            onChange={(e) => handleChange(e)}
            name="email"
            id="email"
            type="email"
            variant="filled"
            placeholder="Email"
            bg={colorMode === "light" ? "white" : "gray.700"}
            color={colorMode === "light" ? "gray.700" : "white"}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input
            onChange={(e) => handleChange(e)}
            name="phone"
            id="phone"
            type="tel"
            variant="filled"
            placeholder="Phone"
            bg={colorMode === "light" ? "white" : "gray.700"}
            color={colorMode === "light" ? "gray.700" : "white"}
          />
        </FormControl>
      </HStack>

      <HStack spacing={6}>
        <FormControl>
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input
            onChange={(e) => handleChange(e)}
            name="address"
            id="address"
            type="text"
            variant="filled"
            placeholder="Address"
            bg={colorMode === "light" ? "white" : "gray.700"}
            color={colorMode === "light" ? "gray.700" : "white"}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="linkedin">LinkedIn</FormLabel>
          <Input
            onChange={(e) => handleChange(e)}
            name="linkedin"
            id="linkedin"
            type="url"
            variant="filled"
            placeholder="https://linkedin.com"
            bg={colorMode === "light" ? "white" : "gray.700"}
            color={colorMode === "light" ? "gray.700" : "white"}
          />
        </FormControl>
      </HStack>
    </Stack>
  );
};

export default About;
