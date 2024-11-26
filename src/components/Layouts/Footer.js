import {
    Text,
    Stack,
    HStack,
    Box,
    Container,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return ( <
        Box bg = { useColorModeValue('gray.100', 'gray.900') }
        color = { useColorModeValue('gray.700', 'gray.200') } >

        <
        Container as = { Stack }
        maxW = { '7xl' }
        py = { 5 }
        direction = {
            { base: 'column', md: 'row' }
        }
        spacing = { 4 }
        justify = {
            { base: 'center', md: 'space-between' }
        }
        align = {
            { base: 'center', md: 'center' }
        } >

      <Stack direction={{ base: 'column', md: 'row' }} fontWeight={'medium'}>
                    <Text>&copy; 2024 NextStep Resume. </Text>
        <Text as={'a'}href ={''}target={'_blank'}color={'black.600'}>Jay Dubey</Text>
      </Stack>


        <
        Stack direction = { 'row' }
        spacing = { 6 } >
       

        <
        /Stack>

        <
        /Container> < /
        Box >
    )
}

export default Footer
