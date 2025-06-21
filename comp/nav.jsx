import { HStack, IconButton } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";

import {
  useColorModeValue,
} from "@/components/ui/color-mode";
import {  LuUser, LuMail, LuFileText, LuFolder } from "react-icons/lu";

const buttons = [
  { label: "Home", to: "/", icon: LuUser },
  { label: "About", to: "/about", icon: LuUser },
  { label: "Contact", to: "/contact", icon: LuMail },
  { label: "Blog", to: "/blog", icon: LuFileText },
  { label: "Projects", to: "/projects", icon: LuFolder },
];

const NavButtons = () => {
  const MotionIconButton = motion(IconButton);
  const location = useLocation();
  const activeColor = useColorModeValue("#1a202c", "white");
  const inactiveColor = useColorModeValue("gray.500", "gray.400");
  const activeShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
  const baseShadow = "4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(255, 255, 255, 0.8)";

  return (
    <HStack
      m={'10px'}
      spacing={4}
      align={'center'}
      justify="center"
      position="fixed"
      bottom="90px"
      left="0"
      right="0"
      zIndex={10}
      display="flex"
    >
      {buttons.map(({ label, to, icon: Icon }) => {
        const isActive = location.pathname === to;
        return (
          <MotionIconButton
            key={label}
            as={Link}
            to={to}
            aria-label={label}
            icon={<Icon size="20px" />}
            rounded="full"
            size="lg"
            // bg={useColorModeValue("#f0f0f3", "#2d2d2d")}
            color={isActive ? activeColor : inactiveColor}
            boxShadow={isActive ? activeShadow : baseShadow}
            _hover={{ boxShadow: activeShadow, transform: "scale(1.05)" }}
            animate={isActive ? { scale: 1.15 } : { scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.4 }}
          />
        );
      })}
    </HStack>
  );
};

export default NavButtons;
