const knex = require('knex');
const config = require('../../knexfile');
const db = knex(config.development);
const lesson = db('lessons');

// Add Records

async function add(data) {
    const [id] = await lesson.insert(data);
    return id;
}

// Find All Records
function find() {
    return lesson;
}

// Find Record by ID
function findById(id) {
    return lesson
        .where({ id })
        .first();
}

// Update a Record


// Delete a Record


module.exports = {
    add,
    find,
    findById
}