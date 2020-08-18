exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('messages').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('messages').insert([
                { sender: 'Isaac', message: 'This lesson sucks', lesson_id: 1 }
            ]);
        });
};