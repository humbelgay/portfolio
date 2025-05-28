import { Avatar, Badge,Text, For, Box, Span , Stack, Separator, Timeline, Grid, Group } from "@chakra-ui/react"
import { LuCheck } from "react-icons/lu"
// import { DecorativeBox } from "compositions/lib/decorative-box"

const Blog = () => {
  return (
    <Box  w={{ base: "100%", md: "90%" }} px={{ base: 4, md: 0 }} mx="auto">
     <Text as="h1" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" mb={8} textAlign="center">
            About
          </Text>
    <Stack
      padding={{ base: 4, md: 12 }}
      direction={{ base: "column", md: "row" }}
      align="stretch"
      spacing={{ base: 6, md: 12 }}
    >
       
      <Box flex={1} gap="8">
       
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
      </Box>

      <Separator
        orientation={{ base: "horizontal", md: "vertical" }}
        alignSelf="stretch"
        my={{ base: 4, md: 0 }}
        mx={{ base: 0, md: 4 }}
      />

      <Box
        flex={1}
        gap="8"
        ml={{ base: 0, md: 8 }}
        mt={{ base: 6, md: 0 }}
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
      </Box>
    </Stack>
    </Box>
  )
}

export default Blog