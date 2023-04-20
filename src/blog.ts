import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
const Schema = mongoose.Schema;

export const blogSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	snippet: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true
	},
}, { timestamps: true });

blogSchema.plugin(mongoosePaginate);

// export const Blog = mongoose.model('Blog', blogSchema);


interface BlogInterface {
	title: string,
	body: string,
	snippet: string
}

// declare a mongoose document based on a Typescript interface representing your schema
interface BlogDocument extends mongoose.Document, BlogInterface { }

// create the paginated model
export const Blog = mongoose.model<
	BlogDocument,
	mongoose.PaginateModel<BlogDocument>
>('Blog', blogSchema, 'blogs');