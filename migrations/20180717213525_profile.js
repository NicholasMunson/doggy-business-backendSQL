
exports.up = function(knex, Promise) {
    return knex
        .schema
        .createTable("profile", profile => {
            profile.increments()
            profile.string("name")
            profile.string("toy")
            profile.string("nickname")
        })
    };
    
    exports.down = function(knex, Promise) {
        return knex
            .schema
            .dropTableIfExists("profile")
    };