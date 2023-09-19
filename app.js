const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const operation_code = "12345";

app.get('/api/operation_code', (req, res) => {
    res.json({ operation_code });
});

app.post('/api/data', (req, res) => {
    try {
        const data = req.body;
        const status = "Success";
        const user_id = data.user_id;
        const college_email_id = data.college_email_id;
        const college_roll_number = data.college_roll_number;
        const num_array = data.num_array;
        const alphabet_array = data.alphabet_array;

        const highest_alphabet = alphabet_array.reduce((max, current) => {
            return current > max ? current : max;
        }, 'A');

        const response_data = {
            status,
            user_id,
            college_email_id,
            college_roll_number,
            num_array,
            alphabet_array,
            highest_alphabet
        };

        res.json(response_data);
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
