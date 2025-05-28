// components/StickyNav.jsx
import { useLocation } from "react-router-dom";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
        
        LuSearch,
        // AtSignIcon,
        
} from "react-icons/lu"
import {
        ColorModeButton,
        DarkMode,
        LightMode,
        useColorMode,
        useColorModeValue,
} from "@/components/ui/color-mode";

const navLinks = [
        { to: "/", label: "Home", icon: <LuSearch/> },
        { to: "/about", label: "About", icon: <LuSearch/> },
        { to: "/blog", label: "blog", icon: <LuSearch/> },
        { to: "/contact", label: "Contact", icon: <LuSearch/> },
        { to: "/projects", label: "projects", icon: <LuSearch/> },
];

const StickyNav = () => {
        const location = useLocation();
        const bg = useColorModeValue("gray.900", "gray.50");
        const iconColor = useColorModeValue("white", "black");
        const hoverBg = useColorModeValue("gray.100", "gray.700");

        return (
                <Box
                        position="fixed"
                        bottom="90px"
                        left="0"
                        right="0"
                        zIndex="sticky"
                        display="flex"
                        justifyContent="center"
                        pointerEvents="none"
                >
                        <Flex px={4} py={2} gap={2} pointerEvents="auto" bg="transparent">
                                {navLinks.map(({ to, label, icon: Icon }) => {
                                        const isActive = location.pathname === to;
                                        return (
                                                <IconButton
                                                        key={to}
                                                        as={Link}
                                                        to={to}
                                                        m={1}
                                                        aria-label={label}
                                                        icon={<LuSearch />}
                                                        size={isActive ? "xl" : "lg"}
                                                        borderRadius="full"
                                                        variant="ghost"
                                                        bg={bg}
                                                        color={iconColor}
                                                        boxShadow={
                                                                isActive
                                                                        ? "0 4px 24px rgba(255, 253, 232, 0.4)"
                                                                        : undefined
                                                        }
                                                        transform={
                                                                isActive
                                                                        ? "scale(1.2) perspective(400px) rotateX(10deg)"
                                                                        : "none"
                                                        }
                                                        transition="all 0.3s cubic-bezier(.25,.8,.25,1)"
                                                        _hover={{
                                                                bg: hoverBg,
                                                                transform:
                                                                        "scale(1.1) perspective(400px) rotateX(8deg)",
                                                                boxShadow: "0 2px 12px rgba(210, 221, 51, 0.59)",
                                                        }}
                                                        _active={{
                                                                bg: hoverBg,
                                                                transform:
                                                                        "scale(0.95) perspective(400px) rotateX(0deg)",
                                                        }}
                                                />
                                        );
                                })}
                        </Flex>
                </Box>
        );
};

export default StickyNav;