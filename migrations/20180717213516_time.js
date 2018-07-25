
exports.up = function(knex, Promise) {
return knex
    .schema
    .createTable("time", time => {
        time.increments()
        time.string("name")
        time.timestamps('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex
        .schema
        .dropTableIfExists("time")
};
