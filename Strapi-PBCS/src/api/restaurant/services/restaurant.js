// path: ./src/api/restaurant/services/restaurant.js

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurant.restaurant', ({ strapi }) =>  ({
  // Method 1: Creating an entirely custom service
  async exampleService(...args) {
    let response = { okay: true }

    if (response.okay === false) {
      return { response, error: true }
    }

    return response
  },

  // Method 2: Wrapping a core service (leaves core logic in place)
  async find(...args) {  
    // Calling the default core controller
    const { results, pagination } = await super.find(...args);

    // some custom logic
    results.forEach(result => {
      result.counter = 1;
    });

    return { results, pagination };
  },

  // Method 3: Replacing a core service
  async findOne(entityId, params = {}) {
    return strapi.entityService.findOne('api::restaurant.restaurant', entityId, this.getFetchParams(params));
  },

// Method 4: Call custom query
    async getAllLayoutDetails() {
        const result = strapi
            .query("strapi_core_store_settings")
            .find();
            
            // strapi.query('restaurant').find({ _limit: 10, id_in: [1, 2] });
            // select * from "strapi_core_store_settings";
            console.log("===========", result);
        return result.map((entry) => entry.toObject());
    }

}));