//imports
const db = require('../data/dbConfig.js');

//exports
module.exports = {
    add,
    find,
    findById,
    remove,

}

//helper functions


function find(){
    return db('users').select('id', 'username');
}

function findById(id){
    return db('users').where({ id }).first();
}

async function add(user){
    const [id] = await db('users').insert(user);
    return findById;
}
function remove(id){
    return db('users').where('id', id).del();
}