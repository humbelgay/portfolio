import { HStack, IconButton } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { Spinner } from "@chakra-ui/react"
import { motion } from "framer-motion";

 import { 
 ColorModeButton,
  DarkMode,
  LightMode,
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode"


const buttons = [
  { label: "Home", to: "/",   },
  { label: "About", to: "/about"},
  { label: "Contact", to: "/contact"},
  { label: "blog", to: "/blog"},
  { label: "projects", to: "/projects"}
];

const NavButtons = () => {
const MotionIconButton = motion(IconButton);

  const location = useLocation();
  // Use useColorModeValue to set background colors based on color mode
  const activeBg = useColorModeValue("yellow.200", "yellow.100");
  const inactiveBg = useColorModeValue("gray.100", "gray.700");

  return (
         
    <HStack m={'10px'}   spacing={4} align={'center'} justify="center">
      
      {buttons.map(({ label, to, icon }) => {

        const isActive = location.pathname === to;
        return (
          <MotionIconButton
            key={label}
            as={Link}
            to={to}
            aria-label={label}
            icon={icon}
            rounded="full"
            size="lg"
            bg={isActive ? activeBg : inactiveBg}
            color={isActive ? "white" : "gray.500"}
            _hover={{ bg: activeBg, color: "white" }}
           animate={isActive ? { scale: 1.2 } : { scale: 1 }}
            whileHover={{ scale: 1.1, rotateY: 10, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95, rotateY: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.4 }}
          />
        );
      })}
    </HStack>
  );
};

export default NavButtons;
