import express from 'express';
import cors from 'cors';

import subscribeEmail from './routes/subscribeEmail.js';
import signUp from './routes/signUp.js';
import contactUs from './routes/contactUs.js';
import joinUs from './routes/joinUs.js';
import connectDB from './mongodb/connect.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/subscribe', subscribeEmail);
app.use('/api/signUp', signUp);
app.use('/api/contactUs', contactUs);
app.use('/api/joinUs', joinUs);

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/api/subscribe", (req, res) => {
    const email = req.body.email;
    console.log(email);
})

const startServer = async () => {
    try {
        connectDB(process.env.MongoDB_URL);
        app.listen(5000, () => console.log('Server listening on port 5000'));
    } catch (error) {
        console.log(error);
    }
}

startServer();