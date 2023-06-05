import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    keyword: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    // photo: {
    //     type: String,
    //     required: false
    // },
    content: {
        type: String,
        required: true
    }
})

const blogData = mongoose.model('BlogData', blogSchema);

export default blogData;