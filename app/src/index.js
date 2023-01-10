import React from 'react';
import ReactDOM from 'react-dom/client';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider} from '@shopify/polaris';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/auth/login/Login';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Signup from './components/auth/signup/Signup';
import AppRoute from './AppRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider
        i18n={{
          Polaris: {
            Avatar: {
              label: 'Avatar',
              labelWithInitials: 'Avatar with initials {initials}',
            },
            ContextualSaveBar: {
              save: 'Save',
              discard: 'Discard',
            },
            TextField: {
              characterCount: '{count} characters',
            },
            TopBar: {
              toggleMenuLabel: 'Toggle menu',

              SearchField: {
                clearButtonLabel: 'Clear',
                search: 'Search',
              },
            },
            Modal: {
              iFrameTitle: 'body markup',
            },
            Frame: {
              skipToContent: 'Skip to content',
              navigationLabel: 'Navigation',
              Navigation: {
                closeMobileNavigationLabel: 'Close navigation',
              },
            },
          },
        }}>
        <AppRoute/>
      </AppProvider>

    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
