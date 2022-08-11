"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    auth: {
        secret: env('ADMIN_JWT_SECRET', '2c173f3b288e3e1bd128077874dc1e0e'),
    },
});
