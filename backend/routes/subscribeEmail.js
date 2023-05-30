import express from 'express';
import * as dotenv from 'dotenv';
import subscriber from '../mongodb/models/subscriberEmail.js';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Subscriber Email' });
})

router.route('/').post( async (req, res) => {
  try {
    const { email } = req.body;

    const newSubscriber = new subscriber({ email });
    await newSubscriber.save();

    res.status(200).json({ message: 'Subscriber Email Saved' });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
})

export default router;