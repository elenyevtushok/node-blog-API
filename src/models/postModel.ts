import mongoose, { Types } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { IPost } from '../types/postInterface';
const Schema = mongoose.Schema;

export const postSchema = new Schema({
	userId: {
		type: Types.ObjectId,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true
	},
}, { timestamps: true });

postSchema.plugin(mongoosePaginate);

// create the paginated model
export const Post = mongoose.model<
	IPost,
	mongoose.PaginateModel<IPost>
>('Post', postSchema, 'posts');