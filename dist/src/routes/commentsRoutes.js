"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentsControllers_1 = require("../controllers/comments/commentsControllers");
const router = (0, express_1.Router)();
router.get('/comments/:id', commentsControllers_1.getComment);
router.post('/comments/search', commentsControllers_1.searchComments);
router.post('/comments', commentsControllers_1.createComment);
router.delete('/comments/:id', commentsControllers_1.deleteComment);
router.put('/comments/:id', commentsControllers_1.updateComment);
exports.default = router;
//# sourceMappingURL=commentsRoutes.js.map