import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

import connectDB from './mongodb/connect.js';
import subscribeEmail from './routes/subscribeEmail.js';
import signUp from './routes/signUp.js';
import contactUs from './routes/contactUs.js';
import joinUs from './routes/joinUs.js';
import fetchSubscribers from './routes/fetchSubscribers.js';
import fetchJoinees from './routes/fetchJoinees.js';
import fetchQueries from './routes/fetchQueries.js';
import fetchSignUps from './routes/fetchSignUps.js';
import blogData from './routes/blogData.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api/subscribeEmail', subscribeEmail);
app.use('/api/signUp', signUp);
app.use('/api/contactUs', contactUs);
app.use('/api/joinUs', joinUs);
app.use('/api/fetchSubscribers', fetchSubscribers);
app.use('/api/fetchJoinees', fetchJoinees);
app.use('/api/fetchSignUps', fetchSignUps);
app.use('/api/fetchQueries', fetchQueries);
app.use('/api/blogPost', blogData)

app.get('/', (req, res) => {
  res.send('Hello World!');
})

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

startServer();