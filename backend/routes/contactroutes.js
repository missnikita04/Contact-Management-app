const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

// POST API
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET API
router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});
// DELETE contact
router.delete("/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Contact deleted" });
});

module.exports = router;
