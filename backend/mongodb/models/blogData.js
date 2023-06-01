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
    content: {
        type: String,
        required: true
    }
})

const blogData = mongoose.model('BlogData', blogSchema);

export default blogData;