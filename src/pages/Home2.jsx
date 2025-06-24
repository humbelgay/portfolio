// src/App.jsx
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
// import Pngs  from "../../public/layers"

const MotionBox = motion(Box);

 const layers = [
  "doodle1.png",
  "doodle2.png",
  "doodle3.png",
  // "doodle4.png",
  "doodle5.png"
];

const layerSettings = layers.map((src, index) => ({
  src: `/layers/${src}`,
  zIndex: index,
  speed: 0.1 + index * 0.05,
}));

function Home2() {
  return (
    <Box
      w="100%"
      h="100vh"
      overflow="hidden"
      position="relative"
      // bg="black"
    >
      {layerSettings.map((layer, i) => (
        <MotionBox
          key={i}
          position="absolute"
          top={0}
          
          left={0}
          w="100%"
          h="100%"
          zIndex={layer.zIndex}
          style={{
            backgroundImage: `url(${layer.src})`,
            //  backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
     
          }}
          animate={{
            x: [0, -layer.speed * 100, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 15 - i * 2,
            ease: "linear",
          }}
        />
      ))}
    </Box>
  );
}

export default Home2;
