module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '648c45de3948894b63ec222fe42110f1'),
  },
});
