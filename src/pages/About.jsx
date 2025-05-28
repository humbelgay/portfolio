import {
  SimpleGrid,
  Grid,
  Box,
  Progress,
  Text,
  Image,
  AspectRatio,
  Separator,
  Stack,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Center,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import React from "react";
import hero from "../assets/IMG-123.jpg";

const About = () => {
  return (
    <Box w={{ base: "100%", md: "100%" }} px={{ base: 4, md: 0 }} mx="auto">
      <Text as="h1" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" mb={8} textAlign="center">
        About
      </Text>

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 8, md: 10 }}
        align="center"
        justify="center"
        mb={20}
      >
        <Center>
          <Image
            src={hero}
            alt="Naruto Uzumaki"
            objectFit="cover"
            boxSize={{ base: "100px", md: "300px" }}
            borderRadius="md"
          />
        </Center>

        <Box maxW={{ base: "100%", md: "600px" }}>
          <Card.Root bg="none" border="none">
            <CardHeader>
              <Heading size="md">Full-stack Developer & Visual Artist</Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="md">
                I’m a full-stack developer and visual artist—a hybrid creator who thrives at the intersection of logic
                and imagination. With code, I engineer seamless digital experiences; with paint, pixels, or mixed media,
                I explore the emotional and abstract.
                <br />
                <br />
                My development work focuses on scalable, user-centric applications, while my art delves into [your
                themes: e.g., identity, technology, surrealism, or social commentary]. Whether building a responsive
                web app or crafting a visual narrative, I’m driven by the same goal: telling stories that resonate.
              </Text>
            </CardBody>
          </Card.Root>
        </Box>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 20 }}>
        {/* Skills */}
        <Box>
          <Text as="h2" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={6} textAlign="center">
            Skills
          </Text>
          <Stack spacing={6}>
            {[
              { label: "React", value: 90 },
              { label: "mongoose", value: 85 },
              { label: "next.js", value: 70 },
            ].map((skill, i) => (
              <Box key={i} w="100%" maxW="400px" mx="auto">
                <Text mb={1} fontWeight="semibold">
                  {skill.label}
                </Text>
                <Progress.Root value={skill.value} maxW="sm" colorScheme="teal" borderRadius="md" >
                <Progress.Track flex="1">
                 <Progress.Range />
                </Progress.Track>
                <Text mt={1} fontSize="sm" color="gray.500">
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
          <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6}>
            {[
              { value: "+450", label: "PHP" },
              { value: "+45", label: "CSS" },
              { value: "+40", label: "HTML" },
              { value: "+4", label: "Node.js" },
              { value: "$450", label: "JavaScript" },
              { value: "$450", label: "React" },
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
