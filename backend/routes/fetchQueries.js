import express from 'express';
import Query from '../mongodb/models/contactUs.js';

const router = express.Router();

router.route('/').get(async (req, res) => {
    try {
        const queries = await Query.find({});
        res.status(200).json({sucess: true, data: queries});
    } catch(error) {
        res.status(500).json({ success: false, message: 'Fetching data failed, please try again' });
    }
});

export default router;