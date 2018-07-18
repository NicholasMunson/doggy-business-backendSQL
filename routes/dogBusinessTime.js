const express = require('express');
const router = express.Router();
const queries = require("../queries/timeQueries")


router.get("/", (request, response, next) => {
    queries.list().then(time => {
        response.json({time});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(time => {
        time
        ?response.json({time}):response.status(404).json({message: 'Not found'}) 
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(time => {
        response.status(201).json({posted: time});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(time => {
        response.json({updated: time[0]});
    }).catch(next);
});

module.exports = router;