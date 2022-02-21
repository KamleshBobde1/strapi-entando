module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/articles/customRoute',
        handler: 'restaurant.alldesc',
        config: {
          auth: false,
        },
      },
    ],
  };