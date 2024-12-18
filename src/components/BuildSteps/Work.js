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
    Select,
    Textarea,
    Text,
    useToast,
    useColorMode,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useResume } from '../../Context';
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from 'react-icons/md';

const Work = () => {
    const { workList, setWorkList } = useResume();
    const { colorMode } = useColorMode(); // Access the current theme mode (light/dark)
    const toast = useToast();

    const addMore = () => {
        setWorkList([...workList, { id: uuidv4(), position: '', company: '', type: '', startDate: '', endDate: '', description: '' }]);
    };

    const handleChange = (e, id) => {
        const { name, value } = e.target;
        const updatedWorkList = workList.map((work) => (
            work.id === id ? { ...work, [name]: value } : work
        ));

        setWorkList(updatedWorkList);
    };

    const deleteWork = (id) => {
        setWorkList(workList.filter((elem) => elem.id !== id));
    };

    return (
        <>
            <Accordion allowToggle defaultIndex={[0]}>
                {workList.map((work, index) => (
                    <AccordionItem key={index}>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    <Text fontWeight={'medium'} color={colorMode === 'light' ? 'gray.700' : 'white'}>
                                        {work.position ? work.position : "Position"}
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} bg={colorMode === 'light' ? 'white' : 'gray.700'}>
                            <Input
                                value={work.position}
                                onChange={(e) => handleChange(e, work.id)}
                                name="position"
                                type="text"
                                variant="filled"
                                placeholder="Position"
                                mb={3}
                                bg={colorMode === 'light' ? 'white' : 'gray.600'}
                                color={colorMode === 'light' ? 'gray.700' : 'white'}
                            />

                            <HStack spacing={3}>
                                <Input
                                    value={work.company}
                                    onChange={(e) => handleChange(e, work.id)}
                                    name="company"
                                    type="text"
                                    variant="filled"
                                    placeholder="Company"
                                    bg={colorMode === 'light' ? 'white' : 'gray.600'}
                                    color={colorMode === 'light' ? 'gray.700' : 'white'}
                                />
                                <Select
                                    value={work.type}
                                    onChange={(e) => handleChange(e, work.id)}
                                    name="type"
                                    variant="filled"
                                    placeholder="Employment Type"
                                    bg={colorMode === 'light' ? 'white' : 'gray.600'}
                                    color={colorMode === 'light' ? 'gray.700' : 'white'}
                                >
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Internship">Internship</option>
                                    <option value="Freelance">Freelance</option>
                                </Select>
                            </HStack>

                            <HStack spacing={3} mt={4}>
                                <FormControl>
                                    <FormLabel htmlFor="startDate" color={colorMode === 'light' ? 'gray.700' : 'white'}>
                                        Start Date
                                    </FormLabel>
                                    <Input
                                        value={work.startDate}
                                        onChange={(e) => handleChange(e, work.id)}
                                        name="startDate"
                                        id="startDate"
                                        type="month"
                                        variant="filled"
                                        placeholder="Start Date"
                                        bg={colorMode === 'light' ? 'white' : 'gray.600'}
                                        color={colorMode === 'light' ? 'gray.700' : 'white'}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor="endDate" color={colorMode === 'light' ? 'gray.700' : 'white'}>
                                        End Date
                                    </FormLabel>
                                    <Input
                                        value={work.endDate}
                                        onChange={(e) => handleChange(e, work.id)}
                                        name="endDate"
                                        id="endDate"
                                        type="month"
                                        variant="filled"
                                        placeholder="End Date"
                                        bg={colorMode === 'light' ? 'white' : 'gray.600'}
                                        color={colorMode === 'light' ? 'gray.700' : 'white'}
                                    />
                                </FormControl>
                            </HStack>

                            <FormControl mt={3}>
                                <FormLabel htmlFor="description" color={colorMode === 'light' ? 'gray.700' : 'white'}>
                                    Description
                                </FormLabel>
                                <Textarea
                                    value={work.description}
                                    onChange={(e) => handleChange(e, work.id)}
                                    name="description"
                                    id="description"
                                    variant="filled"
                                    placeholder="Description..."
                                    bg={colorMode === 'light' ? 'white' : 'gray.600'}
                                    color={colorMode === 'light' ? 'gray.700' : 'white'}
                                />
                            </FormControl>

                            <Button
                                rightIcon={<MdDelete />}
                                onClick={() => deleteWork(work.id)}
                                mt={3}
                                colorScheme={'red'}
                            >
                                Delete
                            </Button>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>

            {workList.length < 3 && (
                <Button colorScheme={'purple'} my={5} onClick={addMore}>
                    Add More
                </Button>
            )}
        </>
    );
};

export default Work;
