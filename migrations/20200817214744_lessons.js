exports.up = function(knex) {
    return knex.schema.createTable('lessons', tbl => {
            tbl.increments();
            tbl.text('name', 128).notNullable().unique();
            tbl.timestamps(true, true);

        })
        .createTable('messages', tbl => {
            tbl.increments();
            tbl.string('sender')
                .notNullable()
                .index();
            // .references('username')
            // .inTable('users')
            // .onDelete('CASCADE')
            // .onUpdate('CASCADE');
            tbl.text('message', 500).notNullable();
            tbl.timestamps(true, true);
            tbl.integer('lesson_id')
                .unsigned()
                .references('id')
                .inTable('lessons')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
        // .createTable('users', tbl => {
        //     tbl.increments();
        //     tbl.string('name').notNullable();
        //     tbl.string('username').unique().notNullable();
        //     tbl.text('about');
        //     tbl.string('email').notNullable().unique();

    // })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('lessons')
        .dropTableIfExists('messages');
    // .dropTableIfExists('users');
};