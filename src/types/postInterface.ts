import { Document, Types } from 'mongoose'

export interface IPost extends Document {
	userId: Types.ObjectId,
	title: string,
	body: string,
}

export interface PostUpdateDto {
	title: string;
	body: string;
} 

export interface PostCreateDto extends PostUpdateDto{
	userId: Types.ObjectId;
} 
