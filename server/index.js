import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 8001;

mongoose.set('strictQuery', false);

mongoose
	.connect(`${process.env.MONGO_URL}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server listening on port ${PORT}`);
		});
	})
	.catch(error => console.log(error.message));
