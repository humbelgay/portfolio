import { Box, Card, Button,Flex , Image, Text, VStack, HStack, IconButton } from '@chakra-ui/react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import speedTest  from '../assets/speedType.jpg'
import pac  from '../assets/IMG_0533.jpg'
import movie  from '../assets/movie.jpg'
import hero  from '../assets/IMG-123.jpg'




// import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function  Home ()   {
  const [isHovering, setIsHovering] = useState(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box  >
  

 <Box
      h={isMobile ? "auto" : "50vh"}
      position="relative"
      overflow="hidden"
      display="flex"
      marginBottom={40}
      flexDirection={isMobile ? "column" : "row"}
      alignItems={isMobile ? "flex-start" : "stretch"}
    >
      {/* Background Image */}
 
      {/* Overlay */}
 
      {/* Center Image for Desktop */}


      {/* Center Image for Mobile */}
      {/* {isMobile && (
        <Box w="100%" display="flex" justifyContent="center" >
          <Image
            src="https://avatars.githubusercontent.com/u/1?v=4"
            alt="Profile"
            boxSize="120px"
            borderRadius="full"
            zIndex={3}
            transition="transform 0.5s ease"
            _hover={{
              transform: "scale(1.1)",
            }}
            boxShadow="0 0 0 3px white"
          />
        </Box>
      )} */}

      {/* Left Side - Designer */}
      <Box
        w={isMobile ? "100%" : isHovering === "left" ? "100vw" : "50vw"}
        h={isMobile ? "auto" : "100%"}
        bg="transparent"
        position="relative"
        zIndex={isHovering === "left" ? 2 : 1}
        transition="all 0.9s ease-in-out"
        onMouseEnter={!isMobile ? () => setIsHovering("left") : undefined}
        onMouseLeave={!isMobile ? () => setIsHovering(null) : undefined}
        display="flex"
        alignItems="center"
        justifyContent="center"
        // color="black"
        cursor="pointer"
        opacity={isHovering === "right" && !isMobile ? 0.5 : 1}
        py={isMobile ? 6 : 0}
      >
        <VStack  spacing={4}>
          <Text fontSize="2xl"  fontWeight="bold">
            Designer
          </Text>
          <Text p={5} maxW={'400px'}  fontWeight="medium"  >My portfolio blends bold design and expressive illustration, showcasing branding, digital art, and typography. Clean, dynamic, and thoughtfully crafted, each piece reflects my creative vision. Let’s collaborate—explore and connect. </Text>
 
        </VStack>
      </Box>
     <Box
     
         display={isMobile ? "none" : "flex"}
         justifyContent={'center'}
         objectFit="cover"
         w="100%"
         h="100%"
        url={hero}

        zIndex={10}
        transition="all 0.9s ease-in-out"
        opacity={isHovering ? 1 : .5}
      >
            <Image
            src={hero}
             

             

  
          />

      </Box>

      {/* Right Side - Developer */}
      <Box
        w={isMobile ? "100%" : isHovering === "right" ? "100vw" : "50vw"}
        h={isMobile ? "auto" : "100%"}
        bg="transparent"
        position="relative"
        zIndex={isHovering === "right" ? 2 : 1}
        transition="all 0.9s ease-in-out"
        onMouseEnter={!isMobile ? () => setIsHovering("right") : undefined}
        onMouseLeave={!isMobile ? () => setIsHovering(null) : undefined}
        display="flex"
        alignItems="center"
        justifyContent="center"
        // color="black"
        cursor="pointer"
        opacity={isHovering === "left" && !isMobile ? 0.5 : 1}
        py={isMobile ? 6 : 0}
      >
     
        <VStack  spacing={4}>
          <Text fontSize="2xl"  fontWeight="bold">
            Developer
          </Text>
          <Text p={5} maxW={'400px'}  fontWeight="medium"  >My portfolio blends bold design and expressive illustration, showcasing branding, digital art, and typography. Clean, dynamic, and thoughtfully crafted, each piece reflects my creative vision. Let’s collaborate—explore and connect. </Text>
 
        </VStack>
      </Box>

      {/* Center Image for Desktop */}
      {/* {!isMobile && (
        <Image
          src="https://avatars.githubusercontent.com/u/1?v=4"
          alt="Profile"
          position="absolute"
          top="20%"
          left="50%"
          transform="translate(-50%, -50%)"
          boxSize="150px"
          borderRadius="full"
          zIndex={3}
          transition="transform 0.5s ease"
          _hover={{
            transform: "translate(-50%, -50%) scale(1.1)",
          }}
          boxShadow="0 0 0 3px white"
        />
      )} */}
      
    </Box>


    
<Demo />
</Box>
  );
}

   
export const Demo = () => {
  return (
    <Box  >
      <Text as="h1" fontSize="2xl" fontWeight="bold" mb={8} textAlign="center">
        my latest works
      </Text>
      <HStack display="flex" alignItems="center" justifyContent="center" gap={6} flexWrap="wrap">
        <Card.Root h={400} maxW="320px" overflow="hidden">
          <Image
          src={speedTest}
          width="400px"
             height="200px"
             objectFit="cover"
            // alt="Green double couch with wooden legs"
          />
          <Card.Body gap="2">
            <Card.Title>Typing Speed Test</Card.Title>
            <Card.Description>
              Test your typing speed and accuracy with various text options and test lengths. Customize your text,
               keyboard layout, entry mode, and share your results easily.
            </Card.Description>
            
          </Card.Body>
          <Card.Footer gap="2">
            <Button variant="solid">See Project</Button>
          </Card.Footer>
        </Card.Root>
        <Card.Root  h={400}  maxW="320px" overflow="hidden">
          <Image
            src={pac}
             width="400px"
             height="180px"
             objectPosition="center"
             
             objectFit="cover"
          
          
            alt="Green double couch with wooden legs"
          />
          <Card.Body gap="1">
            <Card.Title>Tupac Shakur illustration</Card.Title>
            <Card.Description>
             Discover a range of drawing ideas inspired by the life and legacy of Tupac Shakur,
              from minimalist sketches to vibrant, expressive pieces.
            </Card.Description>
          
          </Card.Body>
          <Card.Footer gap="2">
            <Button variant="solid">See Project</Button>

          </Card.Footer>
        </Card.Root>
        <Card.Root  h={400}  maxW="320px" overflow="hidden">
          <Image
            src={movie}
              width="400px"
             height="180px"
             objectPosition="center"
             
             objectFit="cover"
            alt="Green double couch with wooden legs"
          />
          <Card.Body gap="1">
            <Card.Title>Movie Apps to Watch Movies list</Card.Title>
            <Card.Description>
              Simple and convenient application for explore movies, tv shows theirs details,
               ratings, trailers, cast and much more in one place
            </Card.Description>
           
          </Card.Body>
          <Card.Footer gap="2">
           <Button variant="solid">See Project</Button>

          </Card.Footer>
        </Card.Root>
      </HStack>
    </Box>
  )
}