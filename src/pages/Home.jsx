import {  Box, Card, Button,Flex , Image, Text, VStack, HStack, IconButton } from '@chakra-ui/react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState, useMemo  } from "react";
import { useColorMode,useColorModeValue } from "@/components/ui/color-mode";
import { useBreakpointValue } from "@chakra-ui/react";
import speedTest  from '@/assets/speedType.jpg'
import pac  from '@/assets/IMG_0533.jpg'
import movie  from '@/assets/movie.jpg'
// import hero  from '../assets/IMG-123.jpg'

import { motion } from "framer-motion";



// import Pngs  from "../../public/layers"


 const layers = [
  "doodle1",
  "doodle2",
   "doodle4",
  "doodle5"
];



const MotionBox = motion(Box);

export default function  Home ()   {
  const { colorMode } = useColorMode();
  const [isHovering, setIsHovering] = useState(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const layerSettings = useMemo(() => {
    return layers.map((base, index) => ({
      src: `/layers/${base}-${colorMode}.png`,
      zIndex: index,
      speed: 0.1 + index * 0.05,
    }));
  }, [colorMode]);
  return (
    <VStack >
      <Box
         w="100%"
         h="80Vh"
         overflow="hidden"
         position="relative"
        //  mt={-10}
        //  boxSizing={'border-box'}
       >
         {layerSettings.map((layer, i) => (
           <MotionBox
             key={i}
             position="absolute"
             top={0}
             
             left={0}
             w="100%"
             h="100%"
             zIndex={layer.zIndex}
             style={{
               backgroundImage: `url(${layer.src})`,
                backgroundSize: "contain",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat",
        
             }}
             animate={{
               x: [0, -layer.speed * 100, 0],
             }}
             transition={{
               repeat: Infinity,
               repeatType: "loop",
               duration: 10 - i * 2,
               ease: "linear",
             }}
           />
         ))}

         
       </Box>
         <Demo></Demo>

       </VStack>
  );
}

const ProjectCard = ({ project, align = "left" }) => {
  const isLeft = align === "left"
  const bg = useColorModeValue("#f0f0f0", "#2a2a2a")
  const textColor = useColorModeValue("#1B1B1B", "#eef8ce")

  return (
    <MotionBox
      w={useBreakpointValue({ base: "100%", md: "48%" })}
      alignSelf={isLeft ? "flex-start" : "flex-end"}
      bg={bg}
      color={textColor}
      p={6}
      mb={20}
      borderRadius="xl"
      shadow="lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Image src={project.image} objectFit="cover" w="100%" h="200px" borderRadius="lg" />
      <VStack align="start" spacing={4} mt={2}>
        <Text fontSize="2xl" fontWeight="bold" fontFamily="devil breeze">
          {project.title}
        </Text>
        <Text>{project.description}</Text>
        <Button>See Project</Button>
      </VStack>
    </MotionBox>
  )
}

export const Demo = () => {
  const bg = useColorModeValue("#f9f9f9", "#1B1B1B")
  const color = useColorModeValue("#1B1B1B", "#eef8ce")

  const projects = [
    {
      title: "Typing Speed Test",
      description: "Test your typing speed and accuracy with various text options...",
      image: speedTest
     
    },
    {
      title: "Tupac Shakur Illustration",
      description: "Discover a range of drawing ideas inspired by Tupac Shakur...",
      image: pac
    },
    {
      title: "Movie App",
      description: "Explore movies, shows, trailers, ratings and cast in one place.",
      image: movie
    }
  ]

  return (
    <Box
      as="section"
      id="projects"
      minH="100vh"
      minW='100%'
      px="15%"
      py="10em"
      bg={bg}
      color={color}
      fontFamily="Poppins"
      scrollSnapAlign="start"
      backgroundImage={useColorModeValue(
        `url('/img/bg.png'), repeating-linear-gradient(to right, transparent 0 500px, #73814B33 500px 501px)`,
        `repeating-linear-gradient(to right, transparent 0 500px, #44502233 500px 501px)`
      )}
      backgroundSize="100%"
      backgroundRepeat="no-repeat"
    >
      {/* Animated Section Number */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Text
          fontFamily="devil breeze"
          fontSize={['5em', '8em', '12em']}
          fontWeight="bold"
          position="absolute"
          left="5%"
          top="1em"
        >
          04
        </Text>
      </motion.div>

      {/* Section Title */}
      <Text
        as="h2"
        fontSize={['2xl', '4xl', '6xl']}
        fontFamily="devil breeze"
        fontWeight="bold"
        textAlign="center"
        mb={16}
        position="relative"
        zIndex="1"
      >
        my latest works
      </Text>

      {/* Alternating Cards */}
      <VStack spacing={16} align="stretch">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            project={project}
            align={idx % 2 === 0 ? "left" : "right"}
          />
        ))}
      </VStack>
    </Box>
  )
}

