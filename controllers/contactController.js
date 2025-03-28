const Contact = require("../models/Contact");

// @desc   Save a contact message
// @route  POST /api/contact
// @access Public
const submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error, try again later." });
  }
};

module.exports = { submitContactForm };
