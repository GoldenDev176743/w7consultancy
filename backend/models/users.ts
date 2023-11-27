import mongoose from "mongoose";

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    job: {
        type: String,
        required: true,
    }
});

const Users = mongoose.model('users', UserSchema);
export default Users;