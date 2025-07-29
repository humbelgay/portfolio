import {
  SimpleGrid,
  Grid,
  Box,
  Progress,
  Text,
  Image,
  AspectRatio,
  Separator,
  VStack,
  Stack,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Center,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
// import React from "react";
import hero from "../assets/hafizHero.jpg"; // Adjust the path as necessary
import { color } from "framer-motion";

const About = () => {
  const textColor = useColorModeValue("#1B1B1B", "#eef8ce");
  return (
    <Box   w={{ base: "100%", md: "100%" }} px={{ base: 4, md: 0 }} mx="auto">
      <Text as="h1" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" mb={8} textAlign="center">
        About
      </Text>

      <Stack
      direction={{ base: "column", lg: "row" }}
      spacing={{ base: 6, md: 12 }}
      align="center"
      justify="space-between"  // Changed to space-between for equal distribution
      mb={{ base: 12, md: 10 }}
      px={{ base: 2, md: 0 }}
      w="100%"
      maxW="1400px"  // Added max width for larger screens
      mx="auto"  // Center the stack
>
  <Center 
    w={{ base: "100%", lg: "50%" }}  // Fixed 50% width on larger screens
    px={{ base: 0, md: 4 }}
  >
    <Image
      src={hero}
      alt="Hafiz Adem"
      borderRadius="10px"
      objectFit="cover"
      width="100%"
      maxW="400px"
      height="auto"
      boxShadow="xl"
    />
  </Center>

  <Box 
    
    w={{ base: "100%", lg: "50%" }}  // Fixed 50% width to match image
    px={{ base: 0, md: 4 }}
  >
    <Card.Root 
      bg="none" 
          color={textColor}

      border="none"
      boxShadow="none"
      h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"  // Vertically center content
    >
      <CardHeader pb={4}>
        <Heading 
          size={{ base: "lg", md: "x1" }}
          textAlign={{ base: "center", lg: "left" }}
          lineHeight="shorter"
        >
          Full-stack Developer & Visual Artist
        </Heading>
      </CardHeader>
      <CardBody>
        <Text 
          fontSize={{ base: "md", md:'lg' }}
          lineHeight={{ base: "tall", md: "1.6" }}  // Improved line height
          textAlign={{ base: "left", md: "left" }}
        >
          Versatile Full-Stack Developer (MERN) & Software Engineer with a flair for Digital Illustration & Graphic Design. Combines strong technical skills in building scalable web applications with a keen eye for visual aesthetics. Passionate about creating seamless, pixel-perfect user experiences—from writing clean backend logic in Node.js to crafting intuitive UI/UX designs and dynamic frontends with React. Adept at merging engineering precision with creative problem-solving to deliver end-to-end digital solutions.
          
          <br /><br />
          
          <Box as="span" fontWeight="bold" display="inline-block" mb={2}>
            Core Strengths:
          </Box>
          
           
          <VStack  align="flex-start" spacing={2} pl={.5}>
            <Box display="flex">
              <Box as="span" mr={2}>✔</Box>
              <Box>Full-Stack Development: Expert in MERN stack (MongoDB, Express.js, React, Node.js) for robust, scalable web apps.</Box>
            </Box>
            <Box display="flex">
              <Box as="span" mr={2}>✔</Box>
              <Box>Software Engineering: Strong fundamentals in algorithms, OOP, and system design for efficient, maintainable code.</Box>
            </Box>
            <Box display="flex">
              <Box as="span" mr={2}>✔</Box>
              <Box>Digital Design: Proficient in Adobe Illustrator, Photoshop, and Figma for branding, illustrations, and UI assets.</Box>
            </Box>
            <Box display="flex">
              <Box as="span" mr={2}>✔</Box>
              <Box>Hybrid Mindset: Bridges code and creativity—whether debugging APIs or designing engaging interfaces.</Box>
            </Box>
          </VStack>
        </Text>
      </CardBody>
    </Card.Root>
  </Box>
</Stack>

      <SimpleGrid  columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 20 }}>
        {/* Skills */}
        <Box>
          <Text as="h2" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={6} textAlign="center">
            Skills
          </Text>
          <Stack  spacing={6} align="center" justify="center" mb={20 }>
            {[
              { label: "React", value: 90 },
              { label: "node.js", value: 85 },
              { label: "express", value: 70 },
            ].map((skill, i) => (
              <Box key={i} w="100%" maxW="400px" mx="auto">
                <Text mb={1} fontWeight="semibold">
                  {skill.label}
                </Text>
                <Progress.Root value={skill.value} maxW="sm" colorScheme="teal" borderRadius="md" >
                <Progress.Track flex="1">
                 <Progress.Range />
                </Progress.Track>
                <Text mt={1} fontSize="sm" color="gray.400">
                  {skill.value}%
                </Text>
                </Progress.Root>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Projects */}
        <Box>
          <Text as="h2" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={6} textAlign="center">
            Projects
          </Text>
          <SimpleGrid mb={8} columns={{ base: 2, md: 3 }} spacing={8} textAlign="center">
            {[
              { value: "+14", label: "react" },
              { value: "+45", label: "javaScript" },
              { value: "+60", label: " digital illustrator" },
              { value: "+4", label: "Node.js" },
              { value: "+30", label: "paints" },
              { value: "+10", label: "3D model" },
            ].map((project, i) => (
              <Grid key={i} textAlign="center" p={2}>
                <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
                  {project.value}
                </Text>
                <Text mt={1} fontSize="sm" color="gray.600">
                  {project.label}
                </Text>
              </Grid>
            ))}
          </SimpleGrid>
        </Box>
      </SimpleGrid>

      {/* Video */}
        <Separator
              orientation={{ base: "horizontal", md: "vertical" }}
              alignSelf="stretch"
              my={{ base: 0, md: 10 }}
              mx={{ base: 0, md: 10 }}
            />
      <AspectRatio mt={20} ratio={16 / 9} maxW="4xl" mx="auto">
        <iframe title="naruto" src="https://www.youtube.com/embed/QhBnZ6NPOY0" allowFullScreen />
      </AspectRatio>
    </Box>
  );
};

export default About;
