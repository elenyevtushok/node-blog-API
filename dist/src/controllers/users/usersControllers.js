"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchUsers = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = void 0;
const userModel_1 = require("../../models/userModel");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    userModel_1.User.findById(id)
        .then((result) => {
        res.send(result);
    });
});
exports.getUser = getUser;
const searchUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    userModel_1.User.paginate(req.body.query, req.body.options)
        .then((result) => {
        res.send(result);
    });
});
exports.searchUsers = searchUsers;
const createUser = (req, res) => {
    const body = req.body;
    const user = new userModel_1.User({
        name: body.name,
        username: body.username,
        email: body.email,
    });
    user.save()
        .then(result => {
        res.status(201).json(result);
    });
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const id = req.params['id'];
    const body = req.body;
    userModel_1.User.findByIdAndUpdate(id, {
        name: body.name,
        username: body.username,
        email: body.email,
    }, { new: true })
        .then((result) => {
        res.send(result);
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const id = req.params['id'];
    userModel_1.User.findByIdAndRemove(id)
        .then((result) => {
        res.send(result);
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=usersControllers.js.map