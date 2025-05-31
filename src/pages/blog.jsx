import { Avatar, Badge,Text, For, Box, Span ,Image, Stack, Separator, Timeline, Grid, Group } from "@chakra-ui/react"
import { LuCheck } from "react-icons/lu"
// import { DecorativeBox } from "compositions/lib/decorative-box"
import hero from "../assets/IMG-123.jpg";

const Blog = () => {
  return (
    <Box   w={{ base: "100%", md: "100%" }} px={{ base: 4, md: 0 }} mx="auto">
     <Text as="h1" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" mb={8} textAlign="center">
            Blog
          </Text>
    <Stack
      padding={{ base: 0, md: 10 }}
      direction={{ base: "column", md: "row" }}
      align="center"
      justify={'center'}
      spacing={{ base: 6, md: 12 }}
    >
      <Box flex={.5} gap="8"> 
        <For each={["subtle", "solid", "outline", "plain"]}>
          {(variant) => (
            <Timeline.Root variant={variant} key={variant}>
              <Timeline.Item>
                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator>
                    <Avatar.Root size="full">
                      <Avatar.Image src="https://bit.ly/sage-adebayo" />
                      <Avatar.Fallback name="Sage" />
                    </Avatar.Root>
                  </Timeline.Indicator>
                </Timeline.Connector>
                <Timeline.Content>
                  <Timeline.Title w={{ base: "100%", md: 200 }}>
                    <Span fontWeight="medium">sage</Span>
                    created a new project
                    created a new project
                    created a new project
                    created a new project
                    created a new project
                    created a new project
                    created a new project
                  </Timeline.Title>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator>
                    <LuCheck />
                  </Timeline.Indicator>
                </Timeline.Connector>
                <Timeline.Content>
                  <Timeline.Title>
                    <Span fontWeight="medium">sage</Span>
                    changed status from <Badge>In progress</Badge> to{" "}
                    <Badge colorPalette="teal">Completed</Badge>
                  </Timeline.Title>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline.Root>
          )}
        </For>
             <Image
                    alt="Naruto Uzumaki"
                    src={hero}
                    // w={'100vh'}
                    m={5}

                    objectFit="cover"
                    boxSize={{ base: "100%", md: "100%" }}
                    borderRadius="md"
                  /> 
                
      </Box>
      
      <Separator
        orientation={{ base: "horizontal", md: "vertical" }}
        alignSelf="stretch"
        my={{ base: 4, md: 0 }}
        mx={{ base: 0, md: 4 }}
      />
      

      <Box
        flex={.5}
        gap="8"
       
      >
       
         


        <For each={["subtle", "solid", "outline", "plain"]}>
          {(variant) => (
            <Timeline.Root variant={variant} key={variant}>
              
              <Timeline.Item>
                <Timeline.Connector>
                
                  <Timeline.Separator />
                  <Timeline.Indicator>
                
                    <Avatar.Root size="full">
                      <Avatar.Image src="https://bit.ly/sage-adebayo" />
                      <Avatar.Fallback name="Sage" />
                    </Avatar.Root>
                  </Timeline.Indicator>
                </Timeline.Connector>
                <Timeline.Content>
               
                  <Timeline.Title w={{ base: "100%", md: 200 }}>
                    <Span fontWeight="medium">sage</Span>
                    created a new project
                    created a new project
                    created a new project
                    created a new project
                    created a new project
                    created a new project
                    created a new project
                  </Timeline.Title>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator>
                    <LuCheck />
                  </Timeline.Indicator>
                </Timeline.Connector>
                <Timeline.Content>
                  <Timeline.Title>
                    <Span fontWeight="medium">sage</Span>
                    changed status from <Badge>In progress</Badge> to{" "}
                    <Badge colorPalette="teal">Completed</Badge>
                  </Timeline.Title>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline.Root>
          )}
        </For>
        
                           <Image
                    alt="Naruto Uzumaki"
                    src={hero}
                    // w={'100vh'}
                    m={5}

                    objectFit="cover"
                    boxSize={{ base: "100%", md: "100%" }}
                    borderRadius="md"
                  />  
      </Box>
    </Stack>
    </Box>
  )
}

export default Blog