import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ThemeProvider} from "@material-tailwind/react";
import {Provider} from "react-redux";
import {store} from "./store/store.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <StrictMode>
            <Provider store={store}>
                <App />
                <ToastContainer />
            </Provider>
        </StrictMode>
    </ThemeProvider>
)
