// // path: .config/admin.js

// module.exports = ({ env }) => ({
//   apiToken: {
// //     salt: env('API_TOKEN_SALT', '7lsPey/3cVLRdZ15bnHVKg=='),
//     salt: env('API_TOKEN_SALT', '1f38530a19498e1e1ceeb42d366313706fdcffaa592837e2fa5f038ce2278b9ba826172786e8211b2243d5baa7ca38b2e1ba416421f7efca03de70e617fa0f1d2455261adbe969c4ce2d626cddea932407f698844edfa091af22afc06e11fdac1dc5ded45358fd4f837360ade982142d4d9bd63330d90afd098cd38ea85c82e6'),
//   },
//   auth: {
//     secret: env('ADMIN_JWT_SECRET', 'LF2URdrZTQzhc3eCYOOATg=='),
//   },
// });

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
