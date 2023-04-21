import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { IUser } from '../types/userInterface';
const Schema = mongoose.Schema;

export const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true
	},
}, { timestamps: true });

userSchema.plugin(mongoosePaginate);

// create the paginated model
export const User = mongoose.model<
	IUser,
	mongoose.PaginateModel<IUser>
>('User', userSchema, 'users');