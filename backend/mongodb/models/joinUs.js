import mongoose from 'mongoose';

const joinSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }, 
    pincode: {
        type: String,
        required: true
    }
})

const joinUs = mongoose.model('JoinUs', joinSchema);

export default joinUs;