exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('lessons').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('lessons').insert([
                { name: 'Lesson 1' },
                { name: 'Lesson 2' },
                { name: 'Lesson 3' }
            ]);
        });
};