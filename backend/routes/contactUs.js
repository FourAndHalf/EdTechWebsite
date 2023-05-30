import express from "express";
import * as dotenv from "dotenv";
import Query from '../mongodb/models/contactUs.js';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Contact Us Query' });
})

router.route('/').post(async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const query = new Query({ name, email, subject, message });
    await query.save();

    res.status(200).json({ message: 'Query Saved' });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
})

export default router;