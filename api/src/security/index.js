const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const { AuthenticationClient } = require('auth0');

const auth0 = new AuthenticationClient({
  domain: process.env.domain,
  clientId: process.env.clientId,
});

// Auth0 configuration
const authConfig = {
  issuer: process.env.issuer,
  audience: process.env.audience,
  algorithms: ['RS256'],
};

const secret = jwksRsa.expressJwtSecret({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
  jwksUri: `${authConfig.issuer}.well-known/jwks.json`,
});

// Check if client auth Middleware
const authenticated = jwt({ secret, ...authConfig });

// User Profile Middleware
async function userProfile(req, res, next) {
  const accessToken = req.headers.authorization.split(' ')[1];
  const profile = await auth0.getProfile(accessToken);
  req.userProfile = profile;
  next();
}

const processAuth = [authenticated, userProfile];

module.exports = { processAuth };
