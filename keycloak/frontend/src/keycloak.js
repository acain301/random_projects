import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080', // or whatever hostname your Keycloak is mapped to
  realm: 'myrealm',
  clientId: 'frontend',
});

export default keycloak;

