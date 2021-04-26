const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routers/user');

mongoose.connect('mongodb://127.0.0.1:27017/songs-list', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);

const port = 5000;
app.listen(port, () =>
	console.log(`Express server is running on port ${port}`)
);
