import { Document, Types } from 'mongoose'

export interface IComment extends Document {
	postId: Types.ObjectId,
	username: string,
	title: string,
	body: string,
}

export interface CommentUpdateDto {
	title: string;
	body: string;
} 

export interface CommentCreateDto extends CommentUpdateDto{
	postId: Types.ObjectId,
	username: string,
} 
