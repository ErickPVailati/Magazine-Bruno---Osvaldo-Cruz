import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes";
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <ChakraProvider value={defaultSystem}>
        <BrowserRouter>
          <CartProvider>
            <Header />
            <AppRoutes/>
            <Footer />
          </CartProvider>
        </BrowserRouter>
      </ChakraProvider>
    </MantineProvider>
  </React.StrictMode>,
);
