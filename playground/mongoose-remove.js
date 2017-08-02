const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


Todo.findByIdAndRemove('598220835fee1362c36c8171').then((todo) => {
	console.log(todo);
});