import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'SubTodo',
            },
        ], // Array of subTodos
    },
    { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);


// import mongoose from "mongoose";
// const todoSchema = new mongoose.Schema({
//     content: {
//         type: String,
//         required: true,
//     },
//     complete: {
//         type: Boolean,
//         default: false,
//     },
//     createdby: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//     }
// }, {
//     timestamps: true
// })

// export const Todo = mongoose.model("Todo", todoSchema)