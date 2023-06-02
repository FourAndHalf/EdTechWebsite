import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
});

const subscriber = mongoose.model('subscriber', subscriberSchema);

export default subscriber;