"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postsControllers_1 = require("../controllers/posts/postsControllers");
const router = (0, express_1.Router)();
router.get('/posts/:id', postsControllers_1.getPost);
router.post('/posts/search', postsControllers_1.searchPosts);
router.post('/posts', postsControllers_1.createPost);
router.post('/posts/batch', postsControllers_1.createPostsBatch);
router.delete('/posts/:id', postsControllers_1.deletePost);
router.put('/posts/:id', postsControllers_1.updatePost);
exports.default = router;
//# sourceMappingURL=postsRoutes.js.map