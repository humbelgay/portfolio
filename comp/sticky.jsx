import { useLocation } from "react-router-dom";
import { Box, Flex, Icon, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {

  LuHouse,
  LuUser,
  LuSearch,
  LuMail,
  LuFolder,
} from "react-icons/lu";
import { FaMoon, FaSun } from "react-icons/fa";

import {
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode";

const navLinks = [
  { to: "/", label: "Home", icon: LuHouse },
  { to: "/about", label: "About", icon: LuUser },
  { to: "/blog", label: "Blog", icon: LuSearch },
  { to: "/contact", label: "Contact", icon: LuMail },
  { to: "/projects", label: "Projects", icon: LuFolder },
];

const StickyNav = () => {
  const location = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();

  const isMobile = useBreakpointValue({ base: true, md: false });

  const bgColor = useColorModeValue( "#2d2d2d","#f0f0f3");
  const activeColor = useColorModeValue( "white" , "#1a202c");
  const inactiveColor = useColorModeValue("gray.400", "gray.500" );

  return (
    <Box
      position="fixed"
      bottom={isMobile ? "50%" : "80px"}
      right={isMobile ? "16px" : "0"}
      left={isMobile ? "auto" : "0"}
      zIndex={10}
      display="flex"
      justifyContent={isMobile ? "flex-end" : "center"}
      pointerEvents="none"
    >
      <Flex
        direction={isMobile ? "column" : "row"}
        px={4}
        py={2}
        gap={4}
        pointerEvents="auto"
        bg="transparent"
        align={isMobile ? "flex-end" : "center"}
      >
        {[...navLinks, 
          
          { icon: colorMode === "Light" ? FaMoon : FaSun, label: colorMode === "Dark" ? "Light" : "Dark", toggle: true }
        ].map(({ to, label, icon, toggle }) => {
          const isActive = location.pathname === to;
          const onClick = toggle ? toggleColorMode : undefined;

          return (
            <VStack
              key={label}
              as={to ? Link : undefined}
              to={to}
              spacing={1}
              textAlign="center"
              pointerEvents="auto"
              _hover={{ transform: "scale(1.05)" }}
              transition="all 0.3s ease"
              onClick={onClick}
              align="center"
            >
              <Box
                rounded="full"
                bg={bgColor}
                color={isActive ? activeColor : inactiveColor}
                p={4}
                cursor={toggle ? "pointer" : "default"}
              >
                <Icon as={icon} boxSize={5} />
              </Box>
              
            </VStack>
          );
        })}
      </Flex>
    </Box>
  );
};

export default StickyNav;
