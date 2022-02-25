// path: ./src/api/restaurant/controllers/restaurant.js
const { has, assoc, mapValues, prop } = require('lodash/fp');
const { createCoreController } = require('@strapi/strapi').factories;
const { getService } = require('@strapi/plugin-content-manager/server/utils');
const hasEditMainField = has('edit.mainField');
const getEditMainField = prop('edit.mainField');
const assocListMainField = assoc('list.mainField');

const assocMainField = metadata =>
  hasEditMainField(metadata) ? assocListMainField(getEditMainField(metadata), metadata) : metadata;
module.exports = createCoreController('api::restaurant.restaurant', ({ strapi }) =>  ({
  // Method 1: Creating an entirely custom action
  async exampleAction(ctx) {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  },

  // Method 2: Wrapping a core action (leaves core logic in place)
  async find(ctx) {
    // some custom logic here
    ctx.query = { ...ctx.query, local: 'en' }
    
    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    // some more custom logic
    meta.date = Date.now()

    return { data, meta };
  },

  // Method 3: Replacing a core action
  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.service('api::restaurant.restaurant').findOne(id, query);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },

  // custom
  async getLayouts(ctx) {
    const contextParams = ctx.params;
    let uid;
    if(contextParams && contextParams.content_type) {
      const type = contextParams.content_type;
      uid = "api::"+type+"."+type;
    }
    const contentTypeService = getService('content-types');
    const contentType = await contentTypeService.findContentType(uid);
    if (!contentType) {
      return ctx.notFound('contentType.notFound');
    }
    const configuration = await contentTypeService.findConfiguration(contentType);
    const confWithUpdatedMetadata = {
      ...configuration,
      metadatas: mapValues(assocMainField, configuration.metadatas),
    };

    const components = await contentTypeService.findComponentsConfigurations(contentType);
    ctx.body = {
      data: {
        contentType: confWithUpdatedMetadata,
        components,
      },
    };
  },

//-----Get all content types ----------------------------------
  // custom
  async getAllContentTypes(ctx) {
    const kind = "collectionType";
    
    let contentTypes = getService('content-types').findContentTypesByKind(kind);
    contentTypes = contentTypes.filter(obj => {
      return obj && (obj.uid && obj.uid.startsWith("api::")) && obj.isDisplayed && obj.kind === kind;
    })
    const { toDto } = getService('data-mapper');

    ctx.body = { data: contentTypes.map(toDto) };
  }

}));