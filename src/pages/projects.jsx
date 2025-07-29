import { Box,Badge, Text,HStack, Flex, Card,Button,Image, VStack, useBreakpointValue } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

import speedTest from '@/assets/speedType.jpg'
import pac2 from '@/assets/pac2.jpg'
import node from '@/assets/node.jpg'
import theGame from '@/assets/theGame.jpg'
import ecommerce from '@/assets/ecommerce.jpg'

import { Stack } from "@chakra-ui/react"
import { Separator } from "@chakra-ui/react"
export const Projects = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const isMobile = useBreakpointValue({ base: true, md: false });
  const textColor = useColorModeValue("#1B1B1B", "#eef8ce")


  return (
    <Box w="100%" px={{ base: 4, md: 10 }} mx="auto" bg={bgColor}>
         <Text
              as="h1"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              mb={8}
              textAlign="center"
            >
              projects
            </Text>
      <Text
        as={"h2"}
        fontSize={{ base: "3xl", md: "5xl" }}
        // fontWeight="bold"
        mb={8}
        textAlign="center"
      >
        Here are some of the things I've been working on.
      </Text>
      <Separator size={"lg"} color={'orange'}  mb={20}/>
     <Flex   direction={isMobile ? "column" : "row"} w="100%" minH="100vh" bg={bgColor} p={4} gap={6}>
      
      <Box flex="1"  borderRadius="lg" bg={useColorModeValue("white", "gray.800")} boxShadow="md" alignItems={"center"} display="flex" flexDirection="column">
       
        <Card.Root color={textColor}    flexDirection="column" overflow="hidden" maxW="full" bg="transparent">
          <Image
            objectFit="cover"
            maxW="100%"
            src={speedTest}
            alt="Caffe Latte"
          />
    <Box bgColor={'transparent'}   p="2" flex="1">
      <Card.Body>
        <Card.Title mb="4">Typing Speed Test</Card.Title>
        <Card.Description color={textColor}     fontSize={16} lineHeight={1.5}>
          Test your typing speed and accuracy with various text options
          and track your progress over time. Perfect for improving your typing skills.
          <br />
          <b>Tech Stack:</b> Built with the MERN stack (MongoDB, Express, React, Node.js) for a seamless full-stack experience. Real-time feedback, persistent user stats, and a modern UI make it both fun and practical.
        </Card.Description>
        <HStack mt="4">
          <Badge>Hot</Badge>
          <Badge>Caffeine</Badge>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Button>Buy Latte</Button>
      </Card.Footer>
    </Box>
  </Card.Root>

      <Separator size={"lg"} colorPalette={'red'}  mt={20}/>

              <Card.Root color={textColor}    flexDirection="column" overflow="hidden" maxW="full" bg="transparent">
          <Image
            objectFit="cover"
            maxW="100%"
            src={ecommerce}
            alt="Caffe Latte"
          />
    <Box bgColor={'transparent'}   p="2" flex="1">
      <Card.Body>
        <Card.Title mb="4">Advanced (MERN )Stack E-Commerce Platformt</Card.Title>
        <Card.Description color={textColor}    fontSize={16} lineHeight={1.5}>
          Built a high-performance, full-stack e-commerce platform using the MERN stack (MongoDB, Express.js, React, Node.js) with Redis caching for optimized speed and scalability. 
        <Card.Title m={"4"}> The platform features: </Card.Title>
           <p> ✅ Secure Authentication – JWT-based login/signup with access & refresh tokens for enhanced security.</p>  <br/>
           <p>✅ Stripe Payment Integration – Seamless and secure checkout with real-time payment processing.</p> <br/>
           <p>✅ Admin Dashboard – Full control over products, orders, and sales analytics for business insights.</p> <br/>
           <p>✅ Redis Caching – Improved performance with fast data retrieval for frequent queries.</p> <br />
           <p>✅ Responsive UI – Modern, mobile-friendly design built with Tailwind CSS.   </p> <br />
            <p>✅ Product Management – Easy CRUD operations for products, categories, and inventory.</p> <br/>


        </Card.Description>
        <HStack mt={"4"}>
          <Badge>Hot</Badge>
          <Badge>Caffeine</Badge>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Button>Buy Latte</Button>
      </Card.Footer>
    </Box>
  </Card.Root>
      
       
      
      </Box>
      <Box flex="1" p={0} borderRadius="lg" bg={useColorModeValue("white", "gray.800")} boxShadow="md" alignItems={"center"} display="flex" flexDirection="column">
      
           <Card.Root flexDirection="column" overflow="hidden" maxW="full" bg="transparent">
          <Image
            objectFit="cover"
            maxW="100%"
            // maxH={"500px"}
            src={pac2}
            alt="Caffe Latte"
          />
    <Box color={textColor}    bgColor={'transparent'}   p="2" flex="1">
      <Card.Body>
        <Card.Title mb="4">Tupac Shakur Illustration</Card.Title>
        <Card.Description color={textColor}    fontSize={16} lineHeight={1.5}>
          Discover a range of drawing ideas inspired by Tupac Shakur
          and explore the intersection of art and hip-hop culture.
          <br />
          <b>Tech Stack:</b> This project showcases a collection of illustrations and concepts, blending artistic expression with the legacy of Tupac Shakur.
        </Card.Description>
        <HStack mt="4">
          <Badge>Hot</Badge>
          <Badge>Caffeine</Badge>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Button>Buy Latte</Button>
      </Card.Footer>
    </Box>
  </Card.Root  >
      <Separator size={"lg"} colorPalette={'red'}  mt={20}/>

      <Card.Root  color={textColor}    flexDirection="column" overflow="hidden" maxW="full" bg="transparent">
          <Image
            objectFit="cover"
            maxW="100%"
            src={theGame}
            alt="Caffe Latte"
          />
    <Box bgColor={'transparent'}    p="2" flex="1">
      <Card.Body>
        <Card.Title mb="4">Breakout the block: 2D Game</Card.Title>
        <Card.Description color={textColor}    fontSize={16} lineHeight={1.5}>
            Breakout the Block is a classic 2D arcade game where you control a paddle to bounce a ball and break all the blocks on the screen. The game is built using only HTML, CSS, and JavaScript, featuring smooth animations and responsive controls. Challenge yourself to clear every level and achieve the highest score!

        </Card.Description   >
        <HStack mt="4">
          <Badge>Hot</Badge>
          <Badge>Caffeine</Badge>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Button>Buy Latte</Button>
      </Card.Footer>
    </Box>
  </Card.Root>

      <Separator size={"lg"} color={'white'}  mt={20}/>

      <Card.Root color={textColor}    flexDirection="column" overflow="hidden" maxW="full" bg="transparent">
          <Image
            objectFit="cover"
            maxW="100%"
            src={node}
            alt="Caffe Latte"
          />
    <Box bgColor={'transparent'}   p="2" flex="1">
      <Card.Body>
        <Card.Title mb="4">Node.js Backend with Enterprise-Grade Features</Card.Title>
        <Card.Description color={textColor}    fontSize={16} lineHeight={1.5}>
         A high-performance, scalable backend built with Node.js, Express.js, and MongoDB, designed for modern web & mobile applications.
        <Card.Title m="4"> Core Architecture: </Card.Title>
         ✅ RESTful API Design – Clean, well-structured endpoints following best practices.<br/> 
         ✅ MVC Pattern – Modular and maintainable codebase. <br/> 
         ✅ Asynchronous Processing – Optimized for speed with async/await. <br/> 
        <Card.Title m="4"> Core Architecture: </Card.Title>
         🔐 JWT Authentication – Secure login with access & refresh tokens.  <br/> 
         🛡️ Rate Limiting & Helmet – Protection against DDoS & common attacks.  <br/> 
         🔒 Role-Based Access Control (RBAC) – Admin, user, and guest permissions.  <br/> 
         📝 Input Validation – Sanitization with Joi or Zod to prevent injection attacks.  <br/> 
        <Card.Title m="4"> DevOps & Performance: </Card.Title>
        🚀 Dockerized Deployment – Easy containerization for scalability. <br/> 
        📊 Logging (Winston/Morgan) – Debugging and activity monitoring. <br/> 
        ⚙️ Environment Management – .env for secure configuration.<br/> 
        🔍 API Documentation (Swagger/Postman) – Clear, auto-generated docs.<br/> 
        
         </Card.Description>
        <HStack mt="4">
          <Badge>Hot</Badge>
          <Badge>Caffeine</Badge>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Button>Buy Latte</Button>
      </Card.Footer>
    </Box>
  </Card.Root>

      </Box>
    </Flex>
    </Box>
  );
};


























export const SpiderManCursor = () => {
  const canvasRef = useRef(null);
  const points = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const currentColor = useRef('rgba(255, 0, 0, 1)');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    const addPoint = (x, y) => {
      points.current.push({ x, y, alpha: 1, color: currentColor.current });
      if (points.current.length > 100) points.current.shift();
    };

    const drawLine = (p1, p2, alpha, color) => {
      ctx.strokeStyle = color.replace(/\d+\.?\d*\)$/g, `${alpha})`);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.current.forEach((p, i) => {
        p.alpha -= 0.01;
        if (p.alpha <= 0) return;

        for (let j = i + 1; j < points.current.length; j++) {
          const q = points.current[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const alpha = Math.min(p.alpha, q.alpha);
            drawLine(p, q, alpha, p.color);
          }
        }
      });

      requestAnimationFrame(render);
    };

    const randomColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgba(${r}, ${g}, ${b}, 1)`;
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      addPoint(e.clientX, e.clientY);
    };

    const handleClick = () => {
      currentColor.current = randomColor();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <Box position="fixed" top="0" left="0" w="100vw" h="100vh" zIndex="9999" pointerEvents="none">
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </Box>
  )
}


export default Projects