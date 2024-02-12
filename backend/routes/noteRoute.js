const express = require('express')
const router = express.Router()
const noteTemplateCopy = require("../models/noteModel")


router.post('/notes', (request, response) => {

    const notedNotes = new noteTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    notedNotes.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router