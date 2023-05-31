import express from 'express';
import subscriber from '../mongodb/models/subscriberEmail.js';

const router = express.Router();

router.route('/').get(async (req, res) => {
    try {
        const subscriberEmails = await subscriber.find({});
        res.status(200).json({sucess: true, data: subscriberEmails});
    } catch(error) {
        res.status(500).json({ success: false, message: 'Fetching data failed, please try again' });
    }
});

export default router;