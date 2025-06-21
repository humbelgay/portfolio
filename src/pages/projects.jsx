import { useEffect, useRef, useState } from "react";
import { Blockquote, Stack } from "@chakra-ui/react"
import { Box , Separator,Flex, Image, useBreakpointValue, Heading, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Timepng from "../assets/time.png"
 import { 
  useColorModeValue,
} from "@/components/ui/color-mode"







// Register ScrollTrigger
if (typeof window !== "undefined" && gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

export const Projects = () => {
  const [rotation, setRotation] = useState(0);
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const imageFilter = useColorModeValue("invert(0)", "invert(1)");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return(

    <Box h={'100%'} >
    <Stack  display={'flex'} align={'center'} justify={'center'} direction={{ base: "column", md: "row" }} justifyContent={"space-evenly"}>
      <Box bg={bgColor} p={10} w={'50%'} h={'100vh'} >
           <Stack gap="8">
      <Blockquote.Root variant="subtle">
        <Blockquote.Content>
          If anyone thinks he is something when he is nothing, he deceives
          himself. Each one should test his own actions. Then he can take pride
          in himself, without comparing himself to anyone else.
        </Blockquote.Content>
      </Blockquote.Root>
      <Blockquote.Root variant="solid">
        <Blockquote.Content>
          If anyone thinks he is something when he is nothing, he deceives
          himself. Each one should test his own actions. Then he can take pride
          in himself, without comparing himself to anyone else.
        </Blockquote.Content>
      </Blockquote.Root>
    </Stack>
       <Stack gap="8" position={"relative"} top={200}>
      <Blockquote.Root variant="subtle">
        <Blockquote.Content>
          If anyone thinks he is something when he is nothing, he deceives
          himself. Each one should test his own actions. Then he can take pride
          in himself, without comparing himself to anyone else.
        </Blockquote.Content>
      </Blockquote.Root>
      <Blockquote.Root variant="solid">
        <Blockquote.Content>
          If anyone thinks he is something when he is nothing, he deceives
          himself. Each one should test his own actions. Then he can take pride
          in himself, without comparing himself to anyone else.
        </Blockquote.Content>
      </Blockquote.Root>
    </Stack>

      </Box>
      <Box bg={bgColor} p={10} w={'50%'}  h={'100vh'}  >

                   <Stack gap="8"  position={'relative'}  top={60}> 
      <Blockquote.Root variant="subtle">
        <Blockquote.Content>
          If anyone thinks he is something when he is nothing, he deceives
          himself. Each one should test his own actions. Then he can take pride
          in himself, without comparing himself to anyone else.
        </Blockquote.Content>
      </Blockquote.Root>
      <Blockquote.Root variant="solid">
        <Blockquote.Content>
          If anyone thinks he is something when he is nothing, he deceives
          himself. Each one should test his own actions. Then he can take pride
          in himself, without comparing himself to anyone else.
        </Blockquote.Content>
      </Blockquote.Root>
    </Stack>
      </Box>

    </Stack>
    </Box>
  )

 
  
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