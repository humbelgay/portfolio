import { Box, Flex, Text, Link, Stack, Icon, Heading } from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaTelegram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BiCopyright } from 'react-icons/bi';
 import { 
  useColorModeValue,
} from "@/components/ui/color-mode"

const Footer = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.700', 'gray.300');
  const hoverColor = useColorModeValue('blue.500', 'blue.300');

  return (
    <Box w={'100%'} as="footer" bg={bgColor} py={2} px={{ base: 0, md: 10 }} mt="auto">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        maxW="full"
        // mx="4"
        m={2}
        justify="space-between"
        align="flex-start"
        gap={8}
      >
        {/* Company Info */}
        <Box maxW="300px">
          <Heading as="h3" size="md" mb={4} color={headingColor}>
            Hafiz Adem
          </Heading>
          <Text color={textColor} mb={4}>
            Building amazing digital experiences that help businesses grow and succeed in the modern world.
          </Text>
          <Stack direction="row" spacing={4}>
            <Link href="#" isExternal>
              <Icon as={FaGithub} boxSize={5} _hover={{ color: hoverColor }} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaTwitter} boxSize={5} _hover={{ color: hoverColor }} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaLinkedin} boxSize={5} _hover={{ color: hoverColor }} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaInstagram} boxSize={5} _hover={{ color: hoverColor }} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaTelegram} boxSize={5} _hover={{ color: hoverColor }} />
            </Link>
          </Stack>
        </Box>

        {/* Quick Links */}
        <Box>
          <Heading as="h3" size="md" mb={4} color={headingColor}>
            Quick Links
          </Heading>
          <Stack spacing={2}>
            <Link href="#" color={textColor} _hover={{ color: hoverColor, textDecoration: 'underline' }}>
              Home
            </Link>
            <Link href="#" color={textColor} _hover={{ color: hoverColor, textDecoration: 'underline' }}>
              About Us
            </Link>
            <Link href="#" color={textColor} _hover={{ color: hoverColor, textDecoration: 'underline' }}>
              Services
            </Link>
            <Link href="#" color={textColor} _hover={{ color: hoverColor, textDecoration: 'underline' }}>
              Portfolio
            </Link>
            <Link href="#" color={textColor} _hover={{ color: hoverColor, textDecoration: 'underline' }}>
              Contact
            </Link>
          </Stack>
        </Box>

        {/* Resources */}
        <Box>
          <Heading as="h3" size="md" mb={4} color={headingColor}>
            Resources
          </Heading>
          <Stack spacing={2}>
            <Link href="#" color={textColor} _hover={{ color: hoverColor, textDecoration: 'underline' }}>
              Blog
            </Link>
            <Link href="#" color={textColor} _hover={{ color: hoverColor, textDecoration: 'underline' }}>
              Documentation
            </Link>
            <Link href="#" color={textColor} _hover={{ color: hoverColor, textDecoration: 'underline' }}>
              Help Center
            </Link>
            <Link href="#" color={textColor} _hover={{ color: hoverColor, textDecoration: 'underline' }}>
              Community
            </Link>
          </Stack>
        </Box>

        {/* Contact */}
        <Box>
          <Heading as="h3" size="md" mb={4} color={headingColor}>
            Contact 
          </Heading>
          <Stack spacing={3}>
            <Flex align="center">
              <Icon as={MdEmail} mr={2} />
              <Link href="mailto:contact@yourcompany.com" color={textColor} _hover={{ color: hoverColor }}>
                hafizadem71@gmail.com
              </Link>
            </Flex>
            <Text color={textColor}>@Nobody71</Text>
            <Text color={textColor}>Ethiopia, Adiss Abeba</Text>
          </Stack>
        </Box>
      </Flex>

      {/* Custom horizontal line instead of Divider */}
      <Box
        my={8}
        borderBottom="1px solid"
        borderColor={useColorModeValue('gray.300', 'gray.700')}
        width="100%"
      />

      <Flex
        direction={{ base: 'column-reverse', md: 'row' }}
        maxW="full"
        mx="auto"
        justify="space-between"
        align="center"
        gap={10}
      >
        <Flex align="center" color={textColor}>
          <Icon as={BiCopyright} mr={1} />
          <Text fontSize="sm">
            {new Date().getFullYear()} Your Company. All rights reserved.
          </Text>
        </Flex>

        <Stack direction="row" spacing={1}>
          <Link href="#" fontSize="sm" color={textColor} _hover={{ color: hoverColor }}>
            Privacy Policy
          </Link>
          <Link href="#" fontSize="sm" color={textColor} _hover={{ color: hoverColor }}>
            Terms of Service
          </Link>
          <Link href="#" fontSize="sm" color={textColor} _hover={{ color: hoverColor }}>
            Cookies
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;