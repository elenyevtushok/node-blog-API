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
exports.createPostsBatch = exports.updatePost = exports.deletePost = exports.getPost = exports.createPost = exports.searchPosts = void 0;
const postModel_1 = require("../../models/postModel");
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    postModel_1.Post.findById(id)
        .then((result) => {
        res.send(result);
    });
});
exports.getPost = getPost;
const searchPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    postModel_1.Post.paginate(req.body.query, req.body.options)
        .then((result) => {
        res.send(result);
    });
});
exports.searchPosts = searchPosts;
const createPost = (req, res) => {
    const body = req.body;
    const post = new postModel_1.Post({
        userId: body.userId,
        title: body.title,
        body: body.body,
    });
    post.save()
        .then(result => {
        res.status(201).json(result);
    });
};
exports.createPost = createPost;
const createPostsBatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = req.body;
    // const allPosts = await Post.find();
    console.log(`Create posts in batch. request: ${JSON.stringify(posts)}`);
    const response = [];
    for (const post of posts) {
        const postDocument = new postModel_1.Post({
            userId: post.userId,
            title: post.title,
            body: post.body,
        });
        const savedPost = yield postDocument.save();
        response.push(savedPost);
    }
    res.status(201).json(response);
});
exports.createPostsBatch = createPostsBatch;
const updatePost = (req, res) => {
    const id = req.params['id'];
    const body = req.body;
    postModel_1.Post.findByIdAndUpdate(id, {
        title: body.title,
        body: body.body
    }, { new: true })
        .then((result) => {
        res.send(result);
    });
};
exports.updatePost = updatePost;
const deletePost = (req, res) => {
    const id = req.params['id'];
    postModel_1.Post.findByIdAndRemove(id)
        .then((result) => {
        res.send(result);
    });
};
exports.deletePost = deletePost;
//# sourceMappingURL=postsControllers.js.map