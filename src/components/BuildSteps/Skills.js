import {
    Box,
    Text,
    Button,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Tag,
    TagCloseButton,
    TagLabel,
    useToast,
    useColorMode,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useResume } from '../../Context';

const Skills = () => {
    const toast = useToast();
    const { colorMode } = useColorMode(); // Access the current theme mode (light/dark)
    const [skill, setSkill] = useState("");
    const { skills, setSkills } = useResume();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!skill || skill.trim() === "") {
            toast({
                title: 'Empty Input',
                description: 'Please enter a valid skill.',
                status: 'error',
                isClosable: true,
            });
            return;
        }

        const newSkill = {
            id: uuidv4(),
            name: skill,
        };
        setSkills([...skills, newSkill]);
        setSkill("");
    };

    const deleteSkill = (id) => {
        setSkills(skills.filter((elem) => elem.id !== id));
    };

    return (
        <>
            <HStack spacing={4} alignItems={'flex-end'} as="form" onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel htmlFor="skill" color={colorMode === 'light' ? 'gray.700' : 'white'}>
                        Add Skills
                    </FormLabel>
                    <Input
                        onChange={(e) => setSkill(e.target.value)}
                        value={skill}
                        name="skill"
                        id="skill"
                        type="text"
                        variant="filled"
                        placeholder="Skill"
                        bg={colorMode === 'light' ? 'white' : 'gray.600'}
                        color={colorMode === 'light' ? 'gray.700' : 'white'}
                    />
                </FormControl>
                <Button
                    type="submit"
                    colorScheme={'purple'}
                    bg={colorMode === 'light' ? 'purple.500' : 'purple.300'}
                    color={colorMode === 'light' ? 'white' : 'gray.800'}
                >
                    Add
                </Button>
            </HStack>

            <Box
                borderWidth={'1px'}
                rounded={'sm'}
                my={4}
                p={2}
                bg={colorMode === 'light' ? 'white' : 'gray.700'}
            >
                {skills.length > 0 ? (
                    skills.map((skill) => (
                        <Tag
                            size={'lg'}
                            key={skill.id}
                            borderRadius="full"
                            variant="solid"
                            colorScheme="purple"
                            m={0.5}
                        >
                            <TagLabel>{skill.name}</TagLabel>
                            <TagCloseButton onClick={() => deleteSkill(skill.id)} />
                        </Tag>
                    ))
                ) : (
                    <Text color={colorMode === 'light' ? 'gray.700' : 'white'}>No Skills Added</Text>
                )}
            </Box>
        </>
    );
};

export default Skills;
