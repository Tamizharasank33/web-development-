const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  'mongodb://127.0.0.1:27017/outproindia'
)
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Contact = mongoose.model(
  'Contact',
  ContactSchema
);

app.post('/api/contact', async (req, res) => {

  try {

    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });

    await newContact.save();

    res.json({
      message: 'Data Saved Successfully'
    });

  } catch (error) {

    res.status(500).json({
      message: 'Server Error'
    });
  }
});

app.get('/', (req, res) => {
  res.send('Backend Running');
});

app.listen(5000, () => {
  console.log('Server Running On 5000');
});