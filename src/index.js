import React from 'react';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import { orange, green } from "@mui/material/colors"
import App from "./App";

const rootElement = document.getElementById ("root");
const root = createRoot(rootElement);
const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: green[500]
        }
    },
    typography: {
        myVarient: {
            fontSize: "8rem",
            color: green[500]
        }
    }
})

root.render (
    <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </StrictMode>
);