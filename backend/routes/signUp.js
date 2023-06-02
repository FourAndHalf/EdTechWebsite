import express from 'express';
import * as dotenv from 'dotenv';
import signUp from '../mongodb/models/signUp.js';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Subscriber Email' });
})

router.post('/', async (req, res) => {
  try {
    const { name, email, course } = req.body;
    const user = new signUp({ name, email, course });
    await user.save(); 

    res.status(200).json({ message: 'Subscriber Email Saved' });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

export default router;