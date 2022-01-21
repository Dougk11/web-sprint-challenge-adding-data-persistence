// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks(){
    const rows  = await db('tasks')
        .join('projects as p', 'tasks.project_id', 'p.project_id')
        .select('tasks.*', 'p.project_name', 'p.project_description')

    rows.forEach(row => {
        row.task_completed = Boolean(row.task_completed)
    })

        return rows
}

async function getTaskById(id) {
    const row = await db('tasks')
        .where ('tasks.task_id', id).first()
    row.task_completed = Boolean(row.task_completed)
    return row;
}

async function postTask(task) {
    const [postedTask] = await db('tasks').insert(task)
    return getTaskById(postedTask)
}

module.exports = {
    getTasks,
    getTaskById,
    postTask
}