import { Response, Request } from 'express';
import { Comment } from '../../models/commentModel';
import { CommentCreateDto, CommentUpdateDto, IComment } from '../../types/commentInterface';

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
		username: body.username,
		title: body.title,
		body: body.body,
	})

	comment.save()
		.then(result => {
			res.status(201).json(result)
		});
}

const updateComment = (req: Request, res: Response): void => {
	const id = req.params['id']
	const body = req.body as CommentUpdateDto
	Comment.findByIdAndUpdate(id,
		{
			title: body.title,
			body: body.body
		}, { new: true })
		.then((result) => {
			res.send(result)
		});
}

const deleteComment = (req: Request, res: Response): void =>{
	const id = req.params['id'];
	Comment.findByIdAndRemove(id)
		.then((result) => {
			res.send(result)
		});
}

export { searchComments, createComment, getComment, deleteComment, updateComment }