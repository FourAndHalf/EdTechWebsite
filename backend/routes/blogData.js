import express from 'express';
import * as dotenv from 'dotenv';
import blogData from '../mongodb/models/blogData.js';

dotenv.config();

const router = express.Router();

router.route('/').get(async (req, res) => {
    res.status(200).json({ message: 'Blog Data' });
})

router.route('/').post(async (req, res) => {
    try {
        const { author, email, date, keyword, heading, content } = req.body;
        const blog = new blogData({ author, email, date, keyword, heading, content });
        await blog.save();

        res.status(200).json({ message: 'Blog Saved' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
})


// router.route('/search/:keyword').get(async(req,res) =>{
//     try{
//         const {keyword} = req.params.keyword
//         const escapedKeyword = escapeRegExp(keyword);

//         const blog = await blogData.find({
//              keyword: { $regex: new RegExp(escapedKeyword, 'i') },
             
//         })
        
        
        //    const blog = await blogData.find({name: {$regex : search, $options : 'i'}})
//         if (blog.length >0) {
//             res.status(200).json(blog)
//           } else {
//             res.status(404).json({ message: 'Blog not found' });
//           }
//     }
//     catch (error) {
//         console.error(error);
//         res.status(500).send('Something went wrong');
//     }


// })

// router.route('/').get (async (req, res) => {
 
//     const contac = await Contact.findById(req.params.id)
//   if (!contact)
//   {
//     res.status(404)
//     throw new Error ("Contact not found")
//   }
//   res.status(200).json(contact);
//  });


// router.route('/').get(async(req,res) =>{
//     try{
        
//         const blog = await blogData.find()
//         res.status(200).json(blog)
//     }
//     catch (error) {
//         console.error(error);
//         res.status(500).send('Something went wrong');
//     }


// })




export default router;