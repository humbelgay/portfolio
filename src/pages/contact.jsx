import React from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  Separator,
  VStack,
  Link,
  Heading,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

// If you're using a custom DataList component, import it here
// Otherwise, you can render the data using Chakra's native components
const items = [
  { label: "Full Name", value: "Hafiz Adem" },
  { label: "Email", value: "hafizadem71@gmail.com" },
  { label: "Phone", value: "+251-938-921-371" },
  { label: "Address", value: "1234 Main St, Adiss Abeba, Ethiopia" },
];

function Contact() {
  return (
    <Box w="100%" px={{ base: 4, md: 10 }} mx="auto">
      <Text
        as="h1"
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="bold"
        mb={8}
        textAlign="center"
      >
        Contact
      </Text>

      <Flex
        direction={{ base: "column", md: "row" }}
        align="flex-start"
        justify="center"
        gap={10}
      >
        {/* Left Side */}
        <Box maxW="500px" flex="1">
          <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={4}>
            Get in touch
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} mb={4}>
            Let's connect! Whether for project collaborations, creative
            opportunities, or just to say hi—I'd love to hear from you. Drop me
            a message below, and I'll get back to you soon. For quick updates,
            check out my [social media links].
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="teal.500" mb={4}>
            Status: Open for inquiries
          </Text>

          <Box mt={6}>
            {items.map((item) => (
              <Box key={item.label} mb={3}>
                <Text fontWeight="semibold">{item.label}</Text>
                <Text color="gray.600">{item.value}</Text>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Divider for desktop */}
        <Box
          display={{ base: "none", md: "block" }}
          height="auto"
          alignSelf="stretch"
        >
          
        </Box>

        {/* Right Side */}
        <Box
          p={{ base: 4, md: 8 }}
          rounded="md"
          shadow="md"
          flex="1"
          maxW="500px"
          w="100%"
        >
          <VStack spacing={4} as="form">
            <Text
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
            >
              Contact Me
            </Text>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" type="email" />
            <Textarea placeholder="Your Message" rows={6} />
            <Button colorScheme="teal" type="submit" w="full">
              Send Message
            </Button>
          </VStack>
          <Text mt={6} fontSize="sm" color="gray.500" textAlign="center">
            Or email us at{" "}
            <Link href="mailto:contact@example.com" color="teal.500">
              hafizadem71@gmail.com
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Contact;
