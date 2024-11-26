import React, { useEffect } from 'react';
import {
    Box,
    Container,
    Stack,
    Text,
    HStack,
    Heading,
    Button,
    useColorMode,
    useBreakpointValue,
} from '@chakra-ui/react';
import Builder from './Builder';
import ResumePreview from './ResumePreview';
import ThemeSelect from './Theme/ThemeSelect';
import { useReactToPrint } from 'react-to-print';
import { useResume } from '../Context';
import { MdOutlineFileDownload } from 'react-icons/md';

const Main = () => {
    const { printElem } = useResume();
    const { colorMode, toggleColorMode } = useColorMode();  // Hook to access color mode

    const handlePrint = useReactToPrint({
        content: () => printElem.current,
    });

    // Scroll to the top on component mount
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling effect
        });
    }, []);

    return (
        <Container 
            bg={colorMode === 'light' ? 'gray.50' : 'gray.800'} // Background color based on color mode
            color={colorMode === 'light' ? 'gray.700' : 'white'} // Text color based on color mode
            minW={'full'}
            py={10}
            id="builder"
        >
            {/* Heading */}
            <Heading
                as="h4"
                size="lg"
                textAlign={'center'}
                style={{ fontFamily: 'Poppins' }}
                fontWeight={'medium'}
            >
                Dashboard
            </Heading>

            {/* Theme Selector and Download Button */}
            <Container maxW={'7xl'} px={8} my={3}>
                <Stack justifyContent={'space-between'} pt={4} direction={{ base: 'column', sm: 'row' }}>
                    <ThemeSelect />
                    <Button
                        rightIcon={<MdOutlineFileDownload />}
                        onClick={handlePrint}
                        colorScheme={'purple'}
                    >
                        Download
                    </Button>
                </Stack>
            </Container>

            {/* Builder and Resume Preview Section */}
            <Stack
                direction={{ base: 'column', md: 'row' }}
                gap={4}
                mx={{ base: 2, md: 12 }}
                my={8}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
            >
                <Builder />
                <ResumePreview />
            </Stack>
        </Container>
    );
};

export default Main;
