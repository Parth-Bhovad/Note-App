const express = require('express');
const { create, update, read, remove, index } = require('../components/note');
const router = express.Router();
const isLoggedIn = require("../config/isLoggedIn");

// Post Routes
router.post('/new',isLoggedIn, create);
router.post('/update/:id',isLoggedIn, update);

// Get Routes
router.get("/new",isLoggedIn, (req, res) => res.render("createNote"));
router.get('/:id',isLoggedIn, read);
router.get('/remove/:id',isLoggedIn, remove);
router.get("/",isLoggedIn, index);

module.exports = router;
