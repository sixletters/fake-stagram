import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv';
import userRoutes from './routes/users.js'
import { notFound } from './middlewares/errorHandlers.js';

const app = express();
dotenv.config();
app.use(express.json({limit: "30mb" , extended: true}));
app.use(express.urlencoded({limit: "30mb" , extended: true}));
app.use(cors());
app.get('/', (req,res)=> {
    res.send("Hello to Fakestagram API");
})
app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use(notFound);
// app.use(logger);
// app.use(errorHandler);

const PORT = process.env.PORT || 5001

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);