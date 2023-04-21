import mongoose, { Types } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { IComment } from '../types/commentInterface';
const Schema = mongoose.Schema;

export const commentSchema = new Schema({
	postId: {
		type: Types.ObjectId,
		required: true,
	},
	username: {
		type: String,
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

commentSchema.plugin(mongoosePaginate);

// create the paginated model
export const Comment = mongoose.model<
	IComment,
	mongoose.PaginateModel<IComment>
>('Comment', commentSchema, 'comments');