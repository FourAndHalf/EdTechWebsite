import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

import connectDB from './mongodb/connect.js';
import subscribeEmail from './routes/subscribeEmail.js';
// import contactUs from './routes/contactUs.js';
// import joinUs from './routes/joinUs.js';
// import signUp from './routes/signUp.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api/subscribeEmail', subscribeEmail);
// app.use('/api/contactUs', contactUs);
// app.use('/api/joinUs', joinUs);
// app.use('/api/signUp', signUp);

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