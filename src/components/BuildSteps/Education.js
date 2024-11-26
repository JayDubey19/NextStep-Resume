import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    FormControl,
    FormLabel,
    HStack,
    Input,
    VStack,
    Text,
    useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { useResume } from '../../Context';

const Education = () => {
    const { educationList, setEducationList } = useResume();
    const { colorMode } = useColorMode(); // Access the current theme

    const addMore = () => {
        setEducationList([...educationList, educationList]);
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedEducation = educationList.map((edu, i) => (
            index === i ? Object.assign(edu, { [name]: value }) : edu
        ));

        setEducationList(updatedEducation);
    };

    return (
        <>
            <Accordion allowToggle defaultIndex={[0]}>
                {educationList.map((education, index) => (
                    <AccordionItem key={index}>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    <Text
                                        fontWeight={'medium'}
                                        color={colorMode === 'light' ? 'gray.700' : 'white'} // Adjust text color based on theme
                                    >
                                        {education.degree ? education.degree : 'Degree'}
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} bg={colorMode === 'light' ? 'white' : 'gray.700'}> {/* Background color of the panel */}
                            <VStack spacing={4}>
                                <Input
                                    onChange={(e) => handleChange(e, index)}
                                    name="degree"
                                    type="text"
                                    variant="filled"
                                    placeholder="Degree"
                                    bg={colorMode === 'light' ? 'white' : 'gray.600'} // Input background color
                                    color={colorMode === 'light' ? 'gray.700' : 'white'} // Input text color
                                />
                                <Input
                                    onChange={(e) => handleChange(e, index)}
                                    name="school"
                                    type="text"
                                    variant="filled"
                                    placeholder="School"
                                    bg={colorMode === 'light' ? 'white' : 'gray.600'}
                                    color={colorMode === 'light' ? 'gray.700' : 'white'}
                                />
                            </VStack>

                            <HStack spacing={4} mt={4}>
                                <FormControl>
                                    <FormLabel htmlFor="startyr" color={colorMode === 'light' ? 'gray.700' : 'white'}>
                                        Start Year
                                    </FormLabel>
                                    <Input
                                        onChange={(e) => handleChange(e, index)}
                                        name="startYr"
                                        id="startyr"
                                        type="number"
                                        variant="filled"
                                        min="1900"
                                        max="2030"
                                        placeholder="Start Year"
                                        bg={colorMode === 'light' ? 'white' : 'gray.600'}
                                        color={colorMode === 'light' ? 'gray.700' : 'white'}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor="endyr" color={colorMode === 'light' ? 'gray.700' : 'white'}>
                                        End Year
                                    </FormLabel>
                                    <Input
                                        onChange={(e) => handleChange(e, index)}
                                        name="endYr"
                                        id="endyr"
                                        type="number"
                                        variant="filled"
                                        min="1900"
                                        max="2030"
                                        placeholder="End Year"
                                        bg={colorMode === 'light' ? 'white' : 'gray.600'}
                                        color={colorMode === 'light' ? 'gray.700' : 'white'}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor="grade" color={colorMode === 'light' ? 'gray.700' : 'white'}>
                                        Grade
                                    </FormLabel>
                                    <Input
                                        onChange={(e) => handleChange(e, index)}
                                        name="grade"
                                        id="grade"
                                        type="text"
                                        variant="filled"
                                        placeholder="Grade"
                                        bg={colorMode === 'light' ? 'white' : 'gray.600'}
                                        color={colorMode === 'light' ? 'gray.700' : 'white'}
                                    />
                                </FormControl>
                            </HStack>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>

            {educationList.length < 2 && (
                <Button
                    colorScheme={'purple'}
                    my={5}
                    onClick={addMore}
                    bg={colorMode === 'light' ? 'purple.500' : 'purple.300'} // Button color based on theme
                    color={colorMode === 'light' ? 'white' : 'gray.800'} // Button text color
                >
                    Add More
                </Button>
            )}
        </>
    );
};

export default Education;
