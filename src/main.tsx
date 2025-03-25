import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import emailjs from '@emailjs/browser';

emailjs.init('ai1g2C0xWp69MtQvY');

createRoot(document.getElementById("root")!).render(<App />);
