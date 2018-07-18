const database = require("../database_connection");

module.exports = {
    list() {
        return database("time").select()
    },
    read(id) {
        return database("time")
            .select()
            .where("id", id)
            .first()
    },
    create(body) {
        return database("time")
            .select()
            .insert(body)
            .returning("*")
            .then(record => record[0])
    },
    update(id, time) {
        return database("time")
            .update(time)
            .where("id", id)
            .returning("*")
            .then(record => record[0])
    },
    delete(id) {
        return database("time")
            .delete()
            .where("id", id)
    }
};