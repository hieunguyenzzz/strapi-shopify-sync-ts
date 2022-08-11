/**
 *  product controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product.product', ({strapi}) => ({
  async findOne(ctx) {
    // some logic here
    const response = await super.findOne(ctx);
    // some more logic

    return response;
  }
}));
