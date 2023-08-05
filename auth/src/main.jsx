import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import authConfig from './auth_config.json'; // Use import instead of require

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain={authConfig.domain}
    clientId={authConfig.clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }} 
  >
    <Router>
      <App />
    </Router>
  </Auth0Provider>,
  document.getElementById('root')
);
