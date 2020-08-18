const express = require('express');
const lessonHelper = require('./helper_functions/lesson_helpers');
const app = express.Router();

app.get('/', (req, res) => {
    lessonHelper.find().then(lessons => {
            if (lessons) {
                res.status(200).send(lessons);
            } else {
                res.status(404).send('No lessons were found')
            }
        })
        .catch(err => {
            res.status(500).send('Unable to retrieve lessons');
            console.log({ err })
        })
})

app.get('/:id', (req, res) => {
    lessonHelper.findById(req.params.id)
        .then(lesson => {
            if (lesson) {
                res.status(200).send(lesson)
            } else {
                res.status(404).send('Lesson Doesn\'t exist')
            }
        }).catch(err => {
            res.status(500).send('Unable to retrieve lesson');
            console.log({ err })
        })
})

app.post('/', (req, res) => {
    lessonHelper.add(req.body)
        .then(lesson => {
            res.status(201).json(lesson)
        })
        .catch(err => {
            console.log({ err })
            res.status(500).send('Can\'t add a lesson')
        })
})


module.exports = app