import { TabList, Tabs, Tab, TabPanels, TabPanel, Box, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { useResume } from '../Context';
import About from './BuildSteps/About';
import Education from './BuildSteps/Education';
import Projects from './BuildSteps/Projects';
import Skills from './BuildSteps/Skills';
import Work from './BuildSteps/Work';

const Builder = () => {
    const { colorMode } = useColorMode(); // Access the current theme mode (light/dark)

    return (
        <Box
            bg={colorMode === 'light' ? 'white' : 'gray.700'} // Change background color based on the theme
            w={'full'}
            maxW={'xl'}
            rounded={'md'}
            shadow={'md'}
            overflow={'hidden'}
            p={4} // Added padding for better spacing
        >
            <Tabs isFitted variant="enclosed">
                <TabList>
                    <Tab _selected={{ color: 'purple.500', borderColor: 'purple.500' }}>
                        <Text fontWeight={'medium'}>About</Text>
                    </Tab>
                    <Tab _selected={{ color: 'purple.500', borderColor: 'purple.500' }}>
                        <Text fontWeight={'medium'}>Education</Text>
                    </Tab>
                    <Tab _selected={{ color: 'purple.500', borderColor: 'purple.500' }}>
                        <Text fontWeight={'medium'}>Skills</Text>
                    </Tab>
                    <Tab _selected={{ color: 'purple.500', borderColor: 'purple.500' }}>
                        <Text fontWeight={'medium'}>Work</Text>
                    </Tab>
                    <Tab _selected={{ color: 'purple.500', borderColor: 'purple.500' }}>
                        <Text fontWeight={'medium'}>Projects</Text>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <About />
                    </TabPanel>
                    <TabPanel>
                        <Education />
                    </TabPanel>
                    <TabPanel>
                        <Skills />
                    </TabPanel>
                    <TabPanel>
                        <Work />
                    </TabPanel>
                    <TabPanel>
                        <Projects />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default Builder;
