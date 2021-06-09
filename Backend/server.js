const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const categoryApi = require('./src/api/CategoryApi');
const vehicleApi = require('./src/api/VehicleApi');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT;
const MONGO_DB_URI = process.env.MONGODB_URL;

mongoose.connect(MONGO_DB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (error) => {
    if(error){
        console.log('MongoDB Error : ', error.message);
    }
});

mongoose.connection.once('open', () => {
    console.log('Database Connected Successfully!');
});

// For Checking API
app.route('/').get((req, res) => {
    res.send('PRACTICE EXAM 2021 API RUNNING!');
});

app.use('/category', categoryApi());
app.use('/vehicle', vehicleApi());

app.listen(PORT, () => {
    console.log(`Server is up and running : http://localhost:${PORT}`);
});