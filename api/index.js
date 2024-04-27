import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import mongoose from "mongoose";
import config from "./config/index.js";

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(helmet());

// Connect to MongoDB
const mongoDB = config.mongo.fullPath ? 'mongodb://' + config.mongo.fullPath + "/" + config.mongo.db+"?authSource=admin" :
    'mongodb://' + config.mongo.host + ':' + config.mongo.port + '/' + config.mongo.db + "?authSource=admin";
console.log(mongoDB);
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    user: config.mongo.user,
    pass: config.mongo.password,
});

// Listen to MongoDB events
mongoose.connection.on('error', () => console.error('MongoDB connection error:'));
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
    !res.send('Welcome on the API!');
});

//Error handling
app.use((req, res, next) => {
    res.status(404).send('Sorry cant find that!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
