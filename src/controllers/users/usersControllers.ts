import { Response, Request } from 'express';
import { User } from '../../models/userModel';
import { UserCreateDto, IUser } from '../../types/userInterface';


const getUser = async (req: Request, res: Response): Promise<void> => {
	const id = req.params['id']
	User.findById(id)
		.then((result) => {
			res.send(result)
		});
};

const searchUsers = async (req: Request, res: Response): Promise<void> => {
	User.paginate(req.body.query, req.body.options)
		.then((result) => {
			res.send(result)
		});
};

const createUser = (req: Request, res: Response): void => {
	const body = req.body as UserCreateDto
	const user: IUser = new User({
		name: body.name,
		username: body.username,
		email: body.email,
	})

	user.save()
		.then(result => {
			res.status(201).json(result)
		});
}

const updateUser = (req: Request, res: Response): void => {
	const id = req.params['id']
	const body = req.body as UserCreateDto
	User.findByIdAndUpdate(id,
		{
			name: body.name,
			username: body.username,
			email: body.email,
		}, { new: true })
		.then((result) => {
			res.send(result)
		});
}

const deleteUser = (req: Request, res: Response): void =>{
	const id = req.params['id'];
	User.findByIdAndRemove(id)
		.then((result) => {
			res.send(result)
		});
}

export { getUser, createUser, updateUser, deleteUser, searchUsers }