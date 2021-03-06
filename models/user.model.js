import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
      }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;