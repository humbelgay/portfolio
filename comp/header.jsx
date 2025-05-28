import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { LuInstagram ,LuSun,LuMoon} from "react-icons/lu";
// import {  } from "react-icons/lu"
import { 
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode"

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

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
      <Flex gap={4}>
        <IconButton bg={'none'} color={'red'}><LuInstagram /></IconButton>
        <IconButton bg={'none'} color={'red'}><LuInstagram /></IconButton>
        <IconButton bg={'none'} color={'red'}><LuInstagram /></IconButton>
        <IconButton bg={'none'} color={'red'}><LuInstagram /></IconButton>

        <IconButton
          variant="ghost"
          icon={colorMode === "gray.800" ? <LuInstagram />: <LuInstagram /> }
          onClick={toggleColorMode}
          aria-label="Toggle theme"
        />
      </Flex>
    </Flex>
  );
}
