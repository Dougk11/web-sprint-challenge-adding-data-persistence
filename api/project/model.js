// build your `Project` model here
// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects() {
    const rows = await db('projects')

    rows.forEach(row=> {
        row.project_completed = Boolean(row.project_completed)
    })
    return rows;   
}

async function getProjectById(id) {
    const row = await db('projects')
        .where('projects.project_id', id).first()
    row.project_completed = Boolean(row.project_completed)
    return row;
}

async function postProject(project) {
    const [newProject] = await db('projects').insert(project);
    return getProjectById(newProject)

}

module.exports = {
    getProjects,
    getProjectById,
    postProject
}