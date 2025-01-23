// // routes/contact.js
// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');

// // Define a schema
// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
// });

// const Contact = mongoose.model('Contact', contactSchema);

// // POST endpoint to handle form submissions
// router.post('/', async (req, res) => {
//   const { name, email, message } = req.body;
//   const newContact = new Contact({ name, email, message });

//   try {
//     await newContact.save();
//     res.status(201).send('Message sent successfully');
//   } catch (error) {
//     res.status(500).send('Error saving message');
//   }
// });

// module.exports = router;


// routes/contact.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define a schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);

// POST endpoint to handle form submissions
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  const newContact = new Contact({ name, email, message });

  try {
    await newContact.save();
    res.status(201).send('Message sent successfully');
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).send('Error saving message');
  }
});

module.exports = router;