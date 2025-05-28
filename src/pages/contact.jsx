import react from 'react'
import { DataList } from "@chakra-ui/react"

import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  List,
  Text,
  Separator,
  Textarea,
  VStack,
  Link,
} from "@chakra-ui/react";
 import { 

  useColorModeValue,
} from "@/components/ui/color-mode"


 function Contact  (){
  return (
    <Box   w={{ base: "100%", md: "90%" }} px={{ base: 4, md: 0 }} m="auto" >
     <Text as="h1" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" mb={8} textAlign="center">
                About
              </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        minH="20vh"
        px={{ base: 4, md: 0 }}
        gap={{ base: 8, md: 8}}
      >
        <Box mb={{ base: 6, md: 0 }} maxW={{ base: "100%", md: "500px" }}>
           <Text as="h1" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={8} >
                Get in touch
              </Text>
          <Text fontSize={{ base: "md", md: "lg" }} mb={4}>
           "Let's connect! Whether for project collaborations, 
           creative opportunities, or just to say hi—I'd love to hear from you. Drop me a message below, and I'll get back to you soon.
            For quick updates, check out my [social media links]."
            </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="teal.500" mb={2}>
            Status: Open for inquiries
          </Text>
           <Box>

           </Box>
               <DataList.Root orientation="horizontal" divideY="1px" maxW="md">
      {items.map((item) => (
        <DataList.Item key={item.label} pt="4">
          <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
          <DataList.ItemValue>{item.value}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>
        </Box>

        <Box
          p={{ base: 4, md: 8 }}
          rounded="md"
          shadow="md"
          w="100%"
          maxW="500px"
          mx="auto"
        >
          <VStack w={'full'} spacing={4} as="form">
            <Text fontSize={{ base: "x1", md: "2xl" }} fontWeight="bold">
              Contact Us
            </Text>
            <Input  placeholder="Your Name" />
            <Input placeholder="Your Email" type="email" />
            <Textarea placeholder="Your Message" rows={6} />
            <Button colorScheme="teal" type="submit" w="full">
              Send Message
            </Button>
          </VStack>
          <Text mt={6} fontSize="sm" color="gray.500" textAlign="center">
            Or email us at{" "}
            <Link href="mailto:contact@example.com" color="teal.500">
              contact@example.com
            </Link>
          </Text>
        </Box>
      </Flex>
  
    </Box>
  )

}
const items = [
  { label: "Full Name", value: "Hafiz Adem" },
  { label: "Email", value: "hafizadem71@gmail.com" },
  { label: "Phone", value: "+251-938-921-371" },
  { label: "Address", value: "1234 Main St, Adiss Abeba, Ethiopia" },
]

export default Contact;