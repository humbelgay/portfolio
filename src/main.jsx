import { Provider } from "@/components/ui/provider"
// import { ChakraProvider } from '@chakra-ui/react';
// import { extendTheme } from "@chakra-ui/react";
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider >
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
