// src/KeycloakContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import keycloak from './keycloak';

export const KeycloakContext = createContext();

export const KeycloakProvider = ({ children }) => {
  const [keycloakInstance, setKeycloakInstance] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required' }).then(auth => {
      setKeycloakInstance(keycloak);
      setAuthenticated(auth);
    }).catch(() => {
      setAuthenticated(false);
    });
  }, []);

  if (keycloakInstance === null) {
    // Show a loading spinner or null while initializing
    return <div>Loading...</div>;
  }

  return (
    <KeycloakContext.Provider value={{ keycloak: keycloakInstance, authenticated }}>
      {children}
    </KeycloakContext.Provider>
  );
};

