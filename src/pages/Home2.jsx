// src/App.jsx
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
// import Pngs  from "../../public/layers"

const MotionBox = motion(Box);

 const layers = [
  "01_sky_gradient.png",
  "02_sun.png",
  "03_farthest_mountains.png",
  "Artboard 1.png",
  "05_middle_mountains.png",
  "06_distant_tree_line.png",
  "07_left_foreground_trees.png",
  "08_right_foreground_trees.png",
  "09_water_and_reflections.png",
];

const layerSettings = layers.map((src, index) => ({
  src: `/layers/${src}`,
  zIndex: index,
  speed: 0.1 + index * 0.05,
}));

function Home2() {
  return (
    <Box
      w="100vw"
      h="100vh"
      overflow="hidden"
      position="relative"
      bg="black"
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
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            x: [0, -layer.speed * 100, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20 - i * 1.5,
            ease: "linear",
          }}
        />
      ))}
    </Box>
  );
}

export default Home2;
