const express = require('express');
const router = express.Router();
const queries = require("../queries/profileQueries")


router.get("/", (request, response, next) => {
    queries.list().then(profile => {
        response.json({profile});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(profile => {
        profile
        ?response.json({profile}):response.status(404).json({message: 'Not found'}) 
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(profile => {
        response.status(201).json({Posted: profile});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(profile => {
        response.json({updated: profile[0]});
    }).catch(next);
});

module.exports = router;