import {ThemeProvider} from "@mui/material";
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import App from './App.jsx'
import './index.css'
import {createTheme} from "./Theme/index.js";
import {store} from "./Store/store";


const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
        </Provider>
    </React.StrictMode>,
)
