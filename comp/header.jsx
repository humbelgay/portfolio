import { Flex,Icon, Heading, IconButton } from "@chakra-ui/react";
import { LuInstagram ,LuGithub,LuTwitter, LuLinkedin} from "react-icons/lu";
import { FaMoon,FaSun} from 'react-icons/fa';

// import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// import {  } from "react-icons/lu"
import { 
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode"
const  Header=()=> {
  const { colorMode, toggleColorMode } = useColorMode();
   // Updated colors to match the recommended dark/light palette
  const bg = useColorModeValue("#FFFFFF", "#121212");       // Light: white, Dark: near-black
  const color = useColorModeValue("#333333", "#E0E0E0");    // Light: dark gray, Dark: soft white
  const hoverColor = useColorModeValue('blue.500', 'blue.300');

  return (
    <Flex
      as="header"
      position="sticky"
      w="100%"
      p={3}
      justify="space-between"
      align="center"
      bg={bg}
      color={color}
      boxShadow="sm"
      zIndex="1000"
    >
      <Heading size="md">HAFIZ ADEM</Heading>
      <Flex bg={'none'} gap={4}>
        <IconButton size={'sm'}  bg={{ color: bg }}  _hover={{ color: hoverColor }}><LuInstagram /></IconButton>
        <IconButton size={'sm'} bg={{ color: bg }}  _hover={{ color: hoverColor }}><LuGithub /></IconButton>
        <IconButton size={'sm'} bg={{ color: bg }}  _hover={{ color: hoverColor }}>< LuTwitter/></IconButton>
        <IconButton size={'sm'}bg={{ color: bg }}  _hover={{ color: hoverColor }}><LuLinkedin /></IconButton>

   
     
      </Flex>
    </Flex>
  );
}

export default Header
