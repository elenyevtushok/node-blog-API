import { Document, Types } from 'mongoose'

export interface IComment extends Document {
	postId: Types.ObjectId;
	email: string;
	name: string;
	body: string;
}

export interface CommentUpdateDto {
	name: string;
	body: string;
}

export interface CommentCreateDto extends CommentUpdateDto {
	postId: Types.ObjectId | null;
	email: string;
} 
