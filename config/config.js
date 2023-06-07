// path: .config/admin.js
module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', '7lsPey/3cVLRdZ15bnHVKg=='),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'LF2URdrZTQzhc3eCYOOATg=='),
  },
});
