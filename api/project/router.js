// build your `/api/projects` router here
const express = require('express')
const router = express.Router()

const Project = require('./model')

router.get('/', (req, res, next)=> {
    Project.getProjects()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            
        })
})

router.post('/', (req, res, next) => {
    Project.postProject(req.body)
        .then(project=>{
            res.status(201).json(project)
        })
        .catch(next)
})

module.exports = router