import React, { useContext } from 'react';
import { KeycloakContext } from './KeycloakContext';

function App() {
  const { keycloak, authenticated } = useContext(KeycloakContext);

  if (!authenticated) {
    return <div>Not authenticated</div>;
  }

  const logout = () => {
    keycloak.logout();
  };

  return (
    <div>
      <h1>Welcome, {keycloak.tokenParsed?.preferred_username}</h1>
      <p>Email: {keycloak.tokenParsed?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
