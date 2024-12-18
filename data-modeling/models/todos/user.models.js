import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            reuired: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            ruquired: [true, 'password is required'],
        },
    },
    { timestamps: true }
);

export const User = mongoose.model('User', userSchema);

// import mongoose from 'mongoose';
// const userSchema = new mongoose.Schema(
//     {
//         username: {
//             type: String,
//             required: true,
//             unique: true,
//             lowecase: true,
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true,
//             lowecase: true,
//         },
//         password: {
//             type: String,
//             required: [true, 'password is required'],
//         },
//     },
//     { timestamps: true }
// );

// export const User = mongoose.model("User", userSchema)
