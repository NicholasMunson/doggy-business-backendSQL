exports.seed = function (knex, Promise) {
  return knex
      .raw("TRUNCATE TABLE profile RESTART IDENTITY CASCADE")
      .then(function () {
          return knex('profile').insert([
              {
                  name: "Ruca",
                  toy: "ball",
                  nickname: "sausage"
              }
          ]);
      });
};