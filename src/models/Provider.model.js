import { Schema, model } from "mongoose";

const ProviderSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    role: {
        type: String,
        enum: ["proveedor", "invitado"],
        default: "invitado"
    }
}, {
    timestamps: true,
});

const ProviderModel = model("provider", ProviderSchema);

export default ProviderModel;