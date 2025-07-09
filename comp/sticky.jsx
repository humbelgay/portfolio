import { useLocation } from "react-router-dom";
import { Box, Flex, Icon, VStack, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  LuHouse,
  LuUser,
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
  { to: "/contact", label: "Contact", icon: LuMail },
  { to: "/projects", label: "Projects", icon: LuFolder },
];

const StickyNav = () => {
  const location = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Color values for both modes
  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.2)", "rgba(26, 32, 44, 0.2)");
  const activeGlow = useColorModeValue(
    "0 0 10px rgba(18, 16, 128, 0.8)",
    "0 0 10px rgba(21, 179, 60, 0.8)"
  );
  const inactiveColor = useColorModeValue("gray.600", "gray.300");
  const activeColor = useColorModeValue("black.400", "blue.200");
  const borderColor = useColorModeValue(
    "rgba(255, 255, 255, 0.4)",
    "rgba(100, 200, 255, 0.4)"
  );

  return (
    <Box
      position="fixed"
      bottom={isMobile ? "auto" : "70px"}
      right={isMobile ? "20px" : "50%"}
      left={isMobile ? "" : "50%"}
      top={isMobile ? "50%" : "auto"}
      transform={isMobile ? "translateY(-50%)" : "none"}
      zIndex={10}
      display="flex"
      justifyContent={isMobile ? "flex-end" : "center"}
      pointerEvents="none"
    >
      <Flex
        direction={isMobile ? "column" : "row"}
        px={4}
        py={2}
        gap={6}
        pointerEvents="auto"
        align={isMobile ? "flex-end" : "center"}
      >
        {[...navLinks, 
          { icon: colorMode === "light" ? FaMoon : FaSun, label: colorMode === "dark" ? "Light" : "Dark", toggle: true }
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
              transition="all 0.2s ease"
              onClick={onClick}
              align="center"
            >
              <Box
                rounded="full"
                bg={bgColor}
                backdropFilter="blur(8px)"
                border="1px solid"
                borderColor={isActive ? activeColor : borderColor}
                color={isActive ? activeColor : inactiveColor}
                p={3}
                cursor={toggle ? "pointer" : "default"}
                boxShadow={isActive ? activeGlow : "none"}
                transition="all 0.2s ease"
                _hover={{
                  bg: useColorModeValue("rgba(255, 255, 255, 0.3)", "rgba(26, 32, 44, 0.3)"),
                  boxShadow: `0 0 8px ${useColorModeValue("rgba(255, 215, 0, 0.5)", "rgba(100, 200, 255, 0.5)")}`
                }}
              >
                <Icon 
                  as={icon} 
                  boxSize={5} 
                  filter={isActive ? "drop-shadow(0 0 3px currentColor)" : "none"} 
                />
              </Box>
            </VStack>
          );
        })}
      </Flex>
    </Box>
  );
};

export default StickyNav;