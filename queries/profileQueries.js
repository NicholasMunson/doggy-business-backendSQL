const database = require("../database_connection");

module.exports = {
    list() {
        return database("profile").select()
    },
    read(id) {
        return database("profile")
            .select()
            .where("id", id)
            .first()
    },
    create(body) {
        return database("profile")
            .select()
            .insert(body)
            .returning("*")
            .then(record => record[0])
    },
    update(id, profile) {
        return database("profile")
            .update(profile)
            .where("id", id)
            .returning("*")
            .then(record => record[0])
    },
    delete(id) {
        return database("profile")
            .where("id", id)
            .delete()
    }
};
