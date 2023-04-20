import express, {Express} from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose"
import { Blog } from "./blog";

// express app
const app:Express = express();


//connect to mongoDB
const dbURI: string = "mongodb+srv://test-user:krpMy3cp02gk3xaV@cluster1.sxotztp.mongodb.net/blog-database";
mongoose.connect(dbURI)
	.then((result) => app.listen(3000))
	.then((result) => console.log('connected to DB'))
	.catch((err) => console.log(err))


app.use(bodyParser.json())
app.get('/blog/:id', (req, res) => {
	const blogId = req.params['id']
	Blog.findById(blogId)
		.then((result) => {
			res.send(result)
		});
})

app.get('/blog', (req, res) => {
	const options = {
		page: req.query.page,
		limit: req.query.size,
		sort: {
			createdAt: 'asc'
		}
	};

	Blog.paginate({}, options)
		.then((result) => {
			res.send(result)
		});
})

app.post('/blog', (req, res) => {
	const blog = new Blog({
		title: req.body.title,
		snippet: req.body.snippet,
		body: req.body.body
	})

	blog.save()
		.then(result => {
			res.send(result);
		});
});


app.put('/blog/:id', (req, res) => {
	const blogId = req.params['id']
	Blog.findByIdAndUpdate(blogId,
		{
			title: req.body.title,
			snippet: req.body.snippet,
			body: req.body.body
		}, { new: true })
		.then((result) => {
			res.send(result)
		});
})

app.delete('/blog/:id', (req, res) => {
	const blogId = req.params['id']
	Blog.findByIdAndRemove(blogId)
		.then((result) => {
			res.send(result)
		});
})