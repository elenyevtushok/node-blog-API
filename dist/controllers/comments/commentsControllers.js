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
exports.updateComment = exports.deleteComment = exports.getComment = exports.createComment = exports.searchComments = void 0;
const commentModel_1 = require("../../models/commentModel");
const getComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    commentModel_1.Comment.findById(id)
        .then((result) => {
        res.send(result);
    });
});
exports.getComment = getComment;
const searchComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    commentModel_1.Comment.paginate(req.body.query, req.body.options)
        .then((result) => {
        res.send(result);
    });
});
exports.searchComments = searchComments;
const createComment = (req, res) => {
    const body = req.body;
    const comment = new commentModel_1.Comment({
        postId: body.postId,
        username: body.username,
        title: body.title,
        body: body.body,
    });
    comment.save()
        .then(result => {
        res.status(201).json(result);
    });
};
exports.createComment = createComment;
const updateComment = (req, res) => {
    const id = req.params['id'];
    const body = req.body;
    commentModel_1.Comment.findByIdAndUpdate(id, {
        title: body.title,
        body: body.body
    }, { new: true })
        .then((result) => {
        res.send(result);
    });
};
exports.updateComment = updateComment;
const deleteComment = (req, res) => {
    const id = req.params['id'];
    commentModel_1.Comment.findByIdAndRemove(id)
        .then((result) => {
        res.send(result);
    });
};
exports.deleteComment = deleteComment;
//# sourceMappingURL=commentsControllers.js.map