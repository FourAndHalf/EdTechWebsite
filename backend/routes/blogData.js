import express from 'express';
import * as dotenv from 'dotenv';
import blogData from '../mongodb/models/blogData.js';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({ message: 'blog post'})
})

router.route('/').post(async (req, res) => {
    try {
        const { author, email, date, keyword, heading, content } = req.body;
        const blog = new blogData({ author, email, date, keyword, heading, content });
        await blog.save();

        res.status(200).json({ message: 'Blog Saved' });
    } catch (error) {
        console.error(error);
        res.status(500).send(error?.response.data.error.message || 'Something went wrong');
    }
})

export default router;