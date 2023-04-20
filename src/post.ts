import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
const Schema = mongoose.Schema;

export const postSchema = new Schema({
	userId: {
		type: Number,
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

// export const Blog = mongoose.model('Blog', blogSchema);


interface PostInterface {
	userId: number,
	title: string,
	body: string,
}

// declare a mongoose document based on a Typescript interface representing your schema
interface PostDocument extends mongoose.Document, PostInterface { }

// create the paginated model
export const Post = mongoose.model<
	PostDocument,
	mongoose.PaginateModel<PostDocument>
>('Post', postSchema, 'posts');