import mongoose from 'mongoose';

const signUpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    }
})

const signUp = mongoose.model('SignUp', signUpSchema);

export default signUp;