module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/custom/layout/:content_type',
        handler: 'restaurant.getLayouts',
        config: {
          auth: false,
        },
      },
      {
        method: 'GET',
        path: '/custom/content-types/all',
        handler: 'restaurant.getAllContentTypes',
        config: {
          auth: false,
        },
      },
    ]
  };