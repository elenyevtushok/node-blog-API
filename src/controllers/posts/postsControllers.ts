import { Response, Request } from 'express';
import { IPost, PostCreateDto, PostUpdateDto } from '../../types/postInterface';
import { Post } from '../../models/postModel';

const getPost = async (req: Request, res: Response): Promise<void> => {
	const id = req.params['id']
	Post.findById(id)
		.then((result) => {
			res.send(result)
		});
};

const searchPosts = async (req: Request, res: Response): Promise<void> => {
	Post.paginate(req.body.query, req.body.options)
		.then((result) => {
			res.send(result)
		});
};

const createPost = (req: Request, res: Response): void => {
	const body = req.body as PostCreateDto
	const post: IPost = new Post({
		userId: body.userId,
		title: body.title,
		body: body.body,
	})

	post.save()
		.then(result => {
			res.status(201).json(result)
		});
}



const createPostsBatch = async (req: Request, res: Response):Promise<void> => {
	const posts = req.body as PostCreateDto[]
	// const allPosts = await Post.find();
	console.log(`Create posts in batch. request: ${JSON.stringify(posts)}`);
	const response: IPost[] = [];
	for (const post of posts) {
		const postDocument: IPost = new Post({
			userId: post.userId,
			title: post.title,
			body: post.body,
		})
		 const savedPost = await postDocument.save();
		 response.push(savedPost);
	}
	res.status(201).json(response)
}

const updatePost = (req: Request, res: Response): void => {
	const id = req.params['id']
	const body = req.body as PostUpdateDto
	Post.findByIdAndUpdate(id,
		{
			title: body.title,
			body: body.body
		}, { new: true })
		.then((result) => {
			res.send(result)
		});
}

const deletePost = (req: Request, res: Response): void => {
	const id = req.params['id'];
	Post.findByIdAndRemove(id)
		.then((result) => {
			res.send(result)
		});
}

export { searchPosts, createPost, getPost, deletePost, updatePost, createPostsBatch }