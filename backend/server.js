const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect('mongodb://localhost:27017/contacts', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

const ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phone: String,
  company: String,
  jobTitle: String,
});

const Contact = mongoose.model('Contact', ContactSchema);

// this is used to create contact
app.post('/contacts', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send(contact);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});


app.get('/contacts', async (req, res) => {  //this is used to get all contacts
  const contacts = await Contact.find();
  res.send(contacts);
});

// this is to update contact
app.put('/contacts/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(contact);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// this is to delete contact
app.delete('/contacts/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

//will make the server run at port 5000
app.listen(5000, () => console.log('Server running on port 5000'));
