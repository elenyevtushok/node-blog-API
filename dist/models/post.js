"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = exports.postSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const Schema = mongoose_1.default.Schema;
exports.postSchema = new Schema({
    userId: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
}, { timestamps: true });
exports.postSchema.plugin(mongoose_paginate_v2_1.default);
// create the paginated model
exports.Post = mongoose_1.default.model('Post', exports.postSchema, 'posts');
//# sourceMappingURL=post.js.map