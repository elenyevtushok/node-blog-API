"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersControllers_1 = require("../controllers/users/usersControllers");
const router = (0, express_1.Router)();
router.get('/users/:id', usersControllers_1.getUser);
router.post('/users/search', usersControllers_1.searchUsers);
router.post('/users', usersControllers_1.createUser);
router.delete('/users/:id', usersControllers_1.deleteUser);
router.put('/users/:id', usersControllers_1.updateUser);
exports.default = router;
//# sourceMappingURL=usersRoutes.js.map