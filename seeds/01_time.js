exports.seed = function (knex, Promise) {
    return knex
        .raw("TRUNCATE TABLE time RESTART IDENTITY CASCADE")
        .then(function () {
            return knex('time').insert([
                {
                    name: "Ruca",
                    time: "07-25-2018 08:00:00"

                }
            ]);
        });
    };