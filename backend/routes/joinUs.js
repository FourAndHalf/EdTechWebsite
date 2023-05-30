import express from 'express';
import * as dotenv from 'dotenv';
import joinUs from '../mongodb/models/joinUs.js';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Join Us Form' });
})

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, education, course, address, locality, state, pincode } = req.body;
    const user = new joinUs({ firstName, lastName, email, phoneNumber, education, course, address, locality, state, pincode });
    await user.save(); 

    res.status(200).json({ message: 'Join Form Submitted' });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

export default router;