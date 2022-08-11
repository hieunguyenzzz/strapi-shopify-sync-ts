"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'mysql',
        connection: {
            host: env('DATABASE_HOST', 'panel.hieunguyen.dev'),
            port: env.int('DATABASE_PORT', 3307),
            database: env('DATABASE_NAME', 'shopify'),
            user: env('DATABASE_USERNAME', 'mysql'),
            password: env('DATABASE_PASSWORD', '8115b9c1f5debbe45556'),
            ssl: env.bool('DATABASE_SSL', false),
        },
    },
});
