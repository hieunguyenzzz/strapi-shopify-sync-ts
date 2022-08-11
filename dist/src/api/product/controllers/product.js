"use strict";
/**
 *  product controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::product.product', ({ strapi }) => ({
    async findOne(ctx) {
        // some logic here
        const response = await super.findOne(ctx);
        // some more logic
        return response;
    }
}));
