
exports.up = function(knex, Promise) {
return knex
    .schema
    .createTable("time", time => {
        time.increments()
        time.string("name")
        time.string('time')
    })
};

exports.down = function(knex, Promise) {
    return knex
        .schema
        .dropTableIfExists("time")
};
