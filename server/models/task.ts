import mongoose, { Schema, Document } from "mongoose";

//TypeScript interface for Task
export interface ITask extends Document {
    title: string;
    description: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

//MongoDB schema for Task
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

        status: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
)

const Task = mongoose.model<ITask>('Task', taskSchema)

export default Task