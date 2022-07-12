import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/Glysa.otf';
import './fonts/LexendDeca.ttf';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContactsProvider } from './contexts/ContactProvider';
import { ShowModalProvider } from './contexts/ShowModalProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactsProvider>
      <ShowModalProvider>
        <App />
      </ShowModalProvider>
    </ContactsProvider>
  </React.StrictMode>
);

reportWebVitals();
