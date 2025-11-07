import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const taskSchema = new Schema<ITask>(
    {
        title: {
            type: String,
            required: true
        },
        
        description: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
)

const Task = mongoose.model<ITask>('Task', taskSchema)

export default Task