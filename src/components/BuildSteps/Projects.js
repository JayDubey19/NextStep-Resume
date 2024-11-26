import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    VStack,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Textarea,
    Text,
    useColorMode,
} from '@chakra-ui/react';
import { useResume } from '../../Context';
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from 'react-icons/md';

const Projects = () => {
    const { projects, setProjects } = useResume();
    const { colorMode } = useColorMode(); // Access the current theme mode (light/dark)

    const addMore = () => {
        setProjects([...projects, { id: uuidv4(), name: '', url: '', description: '' }]);
    };

    const handleChange = (e, id) => {
        const { name, value } = e.target;
        const updatedProject = projects.map((project) =>
            project.id === id ? { ...project, [name]: value } : project
        );
        setProjects(updatedProject);
    };

    const deleteProject = (id) => {
        setProjects(projects.filter((elem) => elem.id !== id));
    };

    return (
        <>
            <Accordion allowToggle defaultIndex={[0]}>
                {projects.map((project, index) => (
                    <AccordionItem key={index}>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    <Text fontWeight={'medium'} color={colorMode === 'light' ? 'gray.700' : 'white'}>
                                        {project.name ? project.name : "Project Name"}
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} bg={colorMode === 'light' ? 'white' : 'gray.700'}>
                            <VStack spacing={3} alignItems={'flex-end'}>
                                <Input
                                    value={project.name}
                                    onChange={(e) => handleChange(e, project.id)}
                                    name="name"
                                    id="name"
                                    type="text"
                                    variant="filled"
                                    placeholder="Project Name"
                                    bg={colorMode === 'light' ? 'white' : 'gray.600'}
                                    color={colorMode === 'light' ? 'gray.700' : 'white'}
                                />

                                <Input
                                    value={project.url}
                                    onChange={(e) => handleChange(e, project.id)}
                                    name="url"
                                    id="url"
                                    type="url"
                                    variant="filled"
                                    placeholder="Project URL"
                                    bg={colorMode === 'light' ? 'white' : 'gray.600'}
                                    color={colorMode === 'light' ? 'gray.700' : 'white'}
                                />

                                <Textarea
                                    value={project.description}
                                    onChange={(e) => handleChange(e, project.id)}
                                    name="description"
                                    id="description"
                                    variant="filled"
                                    placeholder="Description..."
                                    bg={colorMode === 'light' ? 'white' : 'gray.600'}
                                    color={colorMode === 'light' ? 'gray.700' : 'white'}
                                />

                                <Button
                                    rightIcon={<MdDelete />}
                                    onClick={() => deleteProject(project.id)}
                                    colorScheme={'red'}
                                >
                                    Delete
                                </Button>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>

            {projects.length < 4 && (
                <Button colorScheme={'purple'} my={5} onClick={addMore}>
                    Add More
                </Button>
            )}
        </>
    );
};

export default Projects;
