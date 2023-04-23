import { Response, Request } from 'express';
import { Comment } from '../../models/commentModel';
import { CommentCreateDto, CommentUpdateDto, IComment } from '../../types/commentInterface';
import { Post } from '../../models/postModel';
import { IPost } from '../../types/postInterface';

const getComment = async (req: Request, res: Response): Promise<void> => {
	const id = req.params['id']
	Comment.findById(id)
		.then((result) => {
			res.send(result)
		});
};

const searchComments = async (req: Request, res: Response): Promise<void> => {
	Comment.paginate(req.body.query, req.body.options)
		.then((result) => {
			res.send(result)
		});
};

const createComment = (req: Request, res: Response): void => {
	const body = req.body as CommentCreateDto
	const comment: IComment = new Comment({
		postId: body.postId,
		email: body.email,
		name: body.name,
		body: body.body,
	})

	comment.save()
		.then(result => {
			res.status(201).json(result)
		});
}


const createCommentsForRandomPosts = async (req: Request, res: Response): Promise<void> => {
	console.log(`Create comments`);
	const commentCreateDtos = req.body as CommentCreateDto[]
	const allPosts = await Post.find();
	const response: IComment[] = [];
	for (const commentCreateDto of commentCreateDtos) {
		const post = getRandomPost(allPosts);
		const comment: IComment = new Comment({
			postId: post._id,
			email: commentCreateDto.email,
			name: commentCreateDto.name,
			body: commentCreateDto.body,
		})
		const savedComment = await comment.save();
		response.push(savedComment);
	}
	res.status(201).json(response)
}

const getRandomPost = (posts: IPost[]): IPost => {
	return posts[Math.floor(Math.random() * posts.length)]
}

const updateComment = (req: Request, res: Response): void => {
	const id = req.params['id']
	const body = req.body as CommentUpdateDto
	Comment.findByIdAndUpdate(id,
		{
			name: body.name,
			body: body.body
		}, { new: true })
		.then((result) => {
			res.send(result)
		});
}

const deleteComment = (req: Request, res: Response): void => {
	const id = req.params['id'];
	Comment.findByIdAndRemove(id)
		.then((result) => {
			res.send(result)
		});
}

export { searchComments, createComment, getComment, deleteComment, updateComment, createCommentsForRandomPosts }