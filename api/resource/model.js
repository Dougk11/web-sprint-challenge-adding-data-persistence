// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getResources(){
    return await db('resources')
}

async function getResourceById(id){
    const resource = await db('resources')
        .where('resources.resource_id', id).first()
        return resource;
}

async function postResource(resource) {
    const [newResource] = await db ('resources').insert(resource)
    return getResourceById(newResource)
}

module.exports = {
    getResources,
    postResource,
}

