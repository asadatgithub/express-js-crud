import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    email: { type: String, index: true, required: true },
    image: {type: String},
    password: { type: String, index: true },
});

const User = mongoose.model('User', UserSchema);
export default User;