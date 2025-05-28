// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Sticky, VStack } from "@chakra-ui/react";
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


// const Home = () => <Box p={4}>🏠 Home Page</Box>;
// const About = () => <Box p={4}>ℹ️ About Page</Box>;
// const Contact = () => <Box p={4}>📨 Contact Page</Box>;

function App() {
  return (
   
        <VStack   h={'100vh'}  align="center">
            <Header  />

          <Box w={'95%'} spacing={6} p={8} >
          <StickyNav></StickyNav>


            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={
                <ErrorBoundary>
                <About />
                </ErrorBoundary>
                
                } />
              <Route path="/blog" element={<Blog />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={
                  <ErrorBoundary>
                <Contact />
                </ErrorBoundary>
              } />
            </Routes>
          {/* <NavButtons  /> */}
          </Box>
          <Footer 
 
          />


        </VStack>
    
  );
}

export default App;