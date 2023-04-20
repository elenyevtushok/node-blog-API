"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const blog_1 = require("./blog");
// express app
const app = (0, express_1.default)();
//connect to mongoDB
const dbURI = "mongodb+srv://test-user:krpMy3cp02gk3xaV@cluster1.sxotztp.mongodb.net/blog-database";
mongoose_1.default.connect(dbURI)
    .then((result) => app.listen(3000))
    .then((result) => console.log('connected to DB'))
    .catch((err) => console.log(err));
app.use(body_parser_1.default.json());
app.get('/blog/:id', (req, res) => {
    const blogId = req.params['id'];
    blog_1.Blog.findById(blogId)
        .then((result) => {
        res.send(result);
    });
});
app.get('/blog', (req, res) => {
    const options = {
        page: req.query.page,
        limit: req.query.size,
        sort: {
            createdAt: 'asc'
        }
    };
    blog_1.Blog.paginate({}, options)
        .then((result) => {
        res.send(result);
    });
});
app.post('/blog', (req, res) => {
    const blog = new blog_1.Blog({
        title: req.body.title,
        snippet: req.body.snippet,
        body: req.body.body
    });
    blog.save()
        .then(result => {
        res.send(result);
    });
});
app.put('/blog/:id', (req, res) => {
    const blogId = req.params['id'];
    blog_1.Blog.findByIdAndUpdate(blogId, {
        title: req.body.title,
        snippet: req.body.snippet,
        body: req.body.body
    }, { new: true })
        .then((result) => {
        res.send(result);
    });
});
app.delete('/blog/:id', (req, res) => {
    const blogId = req.params['id'];
    blog_1.Blog.findByIdAndRemove(blogId)
        .then((result) => {
        res.send(result);
    });
});
//# sourceMappingURL=app.js.map