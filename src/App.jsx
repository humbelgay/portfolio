// src/App.jsx
import {ChakraProvider} from '@chakra-ui/react';
import {
  useColorModeValue,
} from "@/components/ui/color-mode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IconButton,Box, Sticky, VStack } from "@chakra-ui/react";
// import { Provider} from "@chakra-ui/react"
// import NavButtons from "../comp/nav"; 
import StickyNav from "../comp/sticky"; 

import Header from "../comp/header"
import Footer from "../comp/footer"
import ErrorBoundary from "../comp/errorboundary";
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Blog from '../src/pages/blog'
import Contact from '../src/pages/contact'
import Projects from '../src/pages/projects'



function App() {

  const textColor = useColorModeValue("#1B1B1B", "#eef8ce")


  return (
    
   
        <VStack  
        // color={textColor}
          h="100vh"
  overflowY="scroll"
  // color={'white'}
  // scrollSnapType="y mandatory"
        >
 
        <Header />
     
      
          <Box  color={textColor}  w={'100%'} spacing={6} p={8} >
          <StickyNav></StickyNav>


            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={
                // <ErrorBoundary>
                <About />
                // </ErrorBoundary>
                
                } />
              {/* <Route path="/blog" element={<Blog />} /> */}
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </Box>
          <Footer 
 
          />


        </VStack>
    
  );
}

export default App;