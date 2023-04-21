import { Document} from 'mongoose'

export interface IUser extends Document {
	name: string,
	username: string,
	email: string,
}

export interface UserCreateDto {
	name: string,
	username: string,
	email: string,
}
