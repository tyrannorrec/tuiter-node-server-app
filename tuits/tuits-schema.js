import mongoose from 'mongoose';
const schema = mongoose.Schema({
    username: String,
    handle: String,
    time: String,
    image: String,
    tuit: String,
    likes: Number,
    replies: Number,
    retuits: Number,
    liked: Boolean,
}, {collection: 'tuits'});
export default schema;