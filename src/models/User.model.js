import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
    },
    phoneNumber:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    role: {
        type: String,
        enum: ["admin", "user", "invitado"],
        default: "user"
    }
}, {
    timestamps: true,
});

const UserModel = model("users", UserSchema);

export default UserModel;