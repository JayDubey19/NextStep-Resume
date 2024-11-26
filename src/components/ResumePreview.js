import {
    Box,
    Heading,
    HStack,
    Tag,
    TagLabel,
    Text,
    VStack,
    Wrap,
    UnorderedList,
    ListItem,
    useColorMode,
    Divider,
    Flex,
    Grid,
    GridItem
} from "@chakra-ui/react";
import { useResume } from "../Context";
import { MdMail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";

const ResumePreview = () => {
    const { about, educationList, skills, workList, projects, printElem } = useResume();
    const { colorMode } = useColorMode(); // Access the current theme mode (light/dark)

    const imgStyle = {
        width: "120px",
        height: "120px",
        margin: "15px",
        borderRadius: "50%",
        objectFit: "cover",
    };

    return (
        <Box
            bg={colorMode === "light" ? "white" : "gray.800"}
            w={"full"}
            rounded={"lg"}
            shadow={"lg"}
            overflow={"hidden"}
            minH={"100vh"}
            p={8}
            fontFamily="Inter, sans-serif"
        >
            <div ref={printElem}>
                {/* Header Section with Name and Role */}
                <Flex align="center" justify="space-between" mb={8} borderBottom="2px solid" borderColor={colorMode === "light" ? "gray.200" : "gray.600"} pb={4}>
                    <HStack>
                        {about.picture && (
                            <img
                                style={imgStyle}
                                src={about.picture}
                                alt="avatar"
                            />
                        )}
                        <VStack m={4} alignItems={"flex-start"} spacing={1}>
                            <Heading as="h3" size="2xl" fontWeight="bold">
                                {about.name ? about.name : "Your Name"}
                            </Heading>
                            <Text fontSize="lg" color={colorMode === "light" ? "gray.600" : "gray.300"}>
                                {about.role ? about.role : "Your Job Role"}
                            </Text>
                        </VStack>
                    </HStack>
                </Flex>

                {/* Contact Information Section */}
                <Box
                    bg={colorMode === "light" ? "purple.500" : "purple.600"}
                    color="white"
                    borderRadius="lg"
                    p={6}
                    mb={8}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <HStack spacing={4}>
                        <MdMail />
                        <Text>{about.email ? about.email : "youremail@Gmail.com"}</Text>
                    </HStack>
                    <HStack spacing={4}>
                        <MdLocalPhone />
                        <Text>{about.phone ? about.phone : "+91919185XXXX"}</Text>
                    </HStack>
                    <HStack spacing={4}>
                        <MdLocationPin />
                        <Text>{about.address ? about.address : "City, State"}</Text>
                    </HStack>
                    <HStack spacing={4}>
                        <RiLinkedinBoxFill />
                        <Text as="a" href={about.linkedin} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </Text>
                    </HStack>
                </Box>

                {/* Main Content Section */}
                <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                    <GridItem colSpan={2}>
                        {/* EDUCATION */}
                        <Box mb={8}>
                            <Heading as="h4" size="lg" fontWeight="semibold" mb={4} color={colorMode === "light" ? "gray.700" : "gray.300"}>
                                EDUCATION
                            </Heading>
                            {educationList.map((education) => {
                                const { degree, school, startYr, endYr, grade } = education;
                                return (
                                    <Box key={school} mb={6} p={4} border="1px" borderColor={colorMode === "light" ? "gray.300" : "gray.600"} borderRadius="md">
                                        <Text fontWeight={"medium"}>{degree ? degree : "Program Name"}</Text>
                                        <Text fontSize="sm" color={colorMode === "light" ? "gray.500" : "gray.400"}>{school ? school : "College Name"}</Text>
                                        <HStack fontSize="xs" fontStyle="italic" justifyContent="space-between" w={"full"} mt={2}>
                                            <Text>{startYr ? startYr : "2022"} - {endYr ? endYr : "2025"}</Text>
                                            <Text>{grade ? grade : "? CGPA"}</Text>
                                        </HStack>
                                    </Box>
                                );
                            })}
                        </Box>
                    </GridItem>

                    <GridItem colSpan={2}>
                        {/* WORK EXPERIENCE */}
                        <Box mb={8}>
                            <Heading as="h4" size="lg" fontWeight="semibold" mb={4} color={colorMode === "light" ? "gray.700" : "gray.300"}>
                                WORK EXPERIENCE
                            </Heading>
                            {workList.map((work) => {
                                const { position, type, company, startDate, endDate, description } = work;
                                return (
                                    <Box key={company} mb={6} p={4} border="1px" borderColor={colorMode === "light" ? "gray.300" : "gray.600"} borderRadius="md">
                                        <Text fontWeight={"medium"}>{position ? position : "Job Role"}</Text>
                                        <Text fontSize="sm" color={colorMode === "light" ? "gray.600" : "gray.400"}>{company ? company : "Company Name"} - {type ? type : "Job Type"}</Text>
                                        <Text fontSize="xs" fontStyle="italic" color={colorMode === "light" ? "gray.500" : "gray.400"}>
                                            {startDate ? startDate : "YYYY-MM"} - {endDate ? endDate : "YYYY-MM"}
                                        </Text>
                                        <Text fontSize="sm" mt={2}>{description ? description : "Job description here."}</Text>
                                    </Box>
                                );
                            })}
                        </Box>
                    </GridItem>

                    <GridItem colSpan={2}>
                        {/* SKILLS */}
                        <Box mb={8}>
                            <Heading as="h4" size="lg" fontWeight="semibold" mb={4} color={colorMode === "light" ? "gray.700" : "gray.300"}>
                                SKILLS
                            </Heading>
                            <Wrap spacing={4}>
                                {skills.map((skill, index) => (
                                    <Tag
                                        key={index}
                                        size={"md"}
                                        borderRadius="md"
                                        variant="solid"
                                        bg={colorMode === "light" ? "purple.500" : "purple.600"}
                                    >
                                        <TagLabel>{skill.name}</TagLabel>
                                    </Tag>
                                ))}
                            </Wrap>
                        </Box>
                    </GridItem>

                    <GridItem colSpan={2}>
                        {/* PROJECTS */}
                        <Box mb={8}>
                            <Heading as="h4" size="lg" fontWeight="semibold" mb={4} color={colorMode === "light" ? "gray.700" : "gray.300"}>
                                PROJECTS
                            </Heading>
                            {projects.map((project) => {
                                const { name, url, description } = project;
                                return (
                                    <Box key={name} mb={6} p={4} border="1px" borderColor={colorMode === "light" ? "gray.300" : "gray.600"} borderRadius="md">
                                        <HStack as="a" href={url} target="_blank" spacing={2}>
                                            <Text fontWeight="medium">{name ? name : "Project Name"}</Text>
                                            <BiLinkExternal />
                                        </HStack>
                                        <UnorderedList pl={5} mt={2}>
                                            <ListItem>
                                                <Text fontSize="sm" as="p">{description ? description : "Project description here."}</Text>
                                            </ListItem>
                                        </UnorderedList>
                                    </Box>
                                );
                            })}
                        </Box>
                    </GridItem>
                </Grid>
            </div>
        </Box>
    );
};

export default ResumePreview;
