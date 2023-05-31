import express from 'express';
import signUp from '../mongodb/models/signUp.js';

const router = express.Router();

router.route('/').get(async (req, res) => {
    try {
        const signUps = await signUp.find({});
        res.status(200).json({sucess: true, data: signUps});
    } catch(error) {
        res.status(500).json({ success: false, message: 'Fetching data failed, please try again' });
    }
});

export default router;