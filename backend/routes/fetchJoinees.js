import express from 'express';
import joinUs from '../mongodb/models/joinUs.js';

const router = express.Router();

router.route('/').get(async (req, res) => {
    try {
        const joinees = await joinUs.find({});
        res.status(200).json({sucess: true, data: joinees});
    } catch(error) {
        res.status(500).json({ success: false, message: 'Fetching data failed, please try again' });
    }
});

export default router;