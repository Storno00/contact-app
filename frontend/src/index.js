import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/Glysa.otf';
import './fonts/LexendDeca.ttf';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContactsProvider } from "./contexts/ContactProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactsProvider>
      <App />
    </ContactsProvider>
  </React.StrictMode>
);

reportWebVitals();
