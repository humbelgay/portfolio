import { SimpleGrid,Grid, Card, Box, Span, Progress, Text, Image, AspectRatio, Stack, Center } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
// import { DecorativeBox } from "compositions/lib/decorative-box"
import React from "react";
import hero  from '../assets/IMG-123.jpg'



const About = () => {
  return (
    <Box w={{ base: "100%", md: "90%" }} px={{ base: 4, md: 0 }} mx="auto">
      <Text as="h1" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" mb={8} textAlign="center">
        About
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        align="center"
        gap={8}
        justify="center"
        spacing={{ base: 6, md: 10 }}
        mb={10}
      >
        <Box display="flex" alignItems="center" justifyContent="center" mb={{ base: 4, md: 0 }}>
          <Image
            src={hero}
              objectFit="cover"
              //  w="50%"
              //  h="100%"
              

            boxSize={{ base: "100px", md: "350px" }}
            // borderRadius="full"
            alt="Naruto Uzumaki"
          />
        </Box>
        <Box breakInside="avoid" w={600} display="flex" alignItems="center" justifyContent="center">
          <Card.Root bg="none" border="none" gap="2">
            <Card.Title>full-stack developer and visual artist</Card.Title>
            <Card.Description w="450px">
      I’m a full-stack developer and visual artist—a hybrid creator who thrives at the intersection of logic and imagination. With code, I engineer seamless digital experiences; with paint, pixels, or mixed media, I explore the emotional and abstract.
My development work focuses on scalable, user-centric applications, while my art delves into [your themes: e.g., identity, technology, surrealism, or social commentary]. Whether building a responsive web app or crafting a visual narrative, I’m driven by the same goal: telling stories that resonate.
            </Card.Description>
            
          </Card.Root>
        </Box>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 8, md: 20 }}>
        <Box>
          <Text as="h1" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={8} textAlign="center">
            Skills
          </Text>
          <Stack align="center" spacing={6}>
            <Progress.Root width="100%" maxWidth="400px" defaultValue={90} maxW="sm">
              <Progress.Label>JavaScript</Progress.Label>
              <Progress.Track mt="2">
                <Progress.Range />
              </Progress.Track>
              <Progress.ValueText>90%</Progress.ValueText>
            </Progress.Root>
            <Progress.Root width="100%" maxWidth="400px" defaultValue={40} maxW="sm">
              <Progress.Label>PHP</Progress.Label>
              <Progress.Track mt="2">
                <Progress.Range />
              </Progress.Track>
              <Progress.ValueText>40%</Progress.ValueText>
            </Progress.Root>
            <Progress.Root width="100%" maxWidth="400px" defaultValue={85} maxW="sm">
              <Progress.Label>JavaScript</Progress.Label>
              <Progress.Track mt="2">
                <Progress.Range />
              </Progress.Track>
              <Progress.ValueText>85%</Progress.ValueText>
            </Progress.Root>
            <Progress.Root width="100%" maxWidth="400px" defaultValue={70} maxW="sm">
              <Progress.Label>React</Progress.Label>
              <Progress.Track mt="2">
                <Progress.Range />
              </Progress.Track>
              <Progress.ValueText>70%</Progress.ValueText>
            </Progress.Root>
          </Stack>
        </Box>
        <Box>
          <Text as="h1" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={8} textAlign="center">
            Projects
          </Text>
          <SimpleGrid columns={{ base: 2, md: 3 }} gap={{ base: 6, md: 10 }}>
            <Grid textAlign="center" height="20">
              <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="medium" letterSpacing="tight" mt="2">
                + 450
              </Text>
              <Span mt="-10px">PHP</Span>
            </Grid>
            <Grid textAlign="center" height="20">
              <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="medium" letterSpacing="tight" mt="2">
                + 45
              </Text>
              <Span mt="-10px">Css</Span>
            </Grid>
            <Grid textAlign="center" height="20">
              <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="medium" letterSpacing="tight" mt="2">
                + 40
              </Text>
              <Span mt="-10px">Html</Span>
            </Grid>
            <Grid textAlign="center" height="20">
              <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="medium" letterSpacing="tight" mt="2">
                + 4
              </Text>
              <Span mt="-10px">node.js</Span>
            </Grid>
            <Grid textAlign="center" height="20">
              <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="medium" letterSpacing="tight" mt="2">
                $450
              </Text>
              <Span mt="-10px">javaScript</Span>
            </Grid>
            <Grid textAlign="center" height="20">
              <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="medium" letterSpacing="tight" mt="2">
                $450
              </Text>
              <Span mt="-10px">react</Span>
            </Grid>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
          <AspectRatio  mt={20}  display="flex" alignItems="center" justifyContent="center" maxW="full" ratio={2}>
      <iframe
        title="naruto"
        src="https://www.youtube.com/embed/QhBnZ6NPOY0"
        allowFullScreen
      />
    </AspectRatio>
    </Box>
  )

}
export default About


