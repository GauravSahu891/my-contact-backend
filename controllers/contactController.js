const asyncHandler = require("express-async-handler");
const Contact = require("../models/ContactModel");


// @desc Get all contacts
// route GET /api/contacts
// @access public

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await addContact.find();
    res.status(200).json(contacts);
});


// @desc Create New contact 
// route POST /api/contacts
// @access public

const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is: ", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All Fields are Mandatory.")
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);
});

// @desc Get contact 
// route GET /api/contacts/:id
// @access public

const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not Found.");
    }
    res.status(200).json(contact);
})

// @desc update contact 
// route PUT /api/contacts/:id
// @access public

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not Found.");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.status(201).json(updateContact);
})

// @desc delete contact 
// route DELETE /api/contacts/:id
// @access public

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not Found.");
    }

    await Contact.deleteOne();
    res.status(200).json(contact);
})

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};