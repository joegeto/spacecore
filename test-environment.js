'use strict';

/*
 * This file supplies the tests with a basic environment containing a database connection
 */

const Configuration = require('./lib/configuration.js');
const Database      = require('./lib/db.js');
const configuration = new Configuration('configuration.json');

var database = null;

function start() {
	database = new Database({
		host: configuration.get('test', 'database', 'host'),
		user: configuration.get('test', 'database', 'user'),
		password: configuration.get('test', 'database', 'password'),
		database: configuration.get('test', 'database', 'name'),
		verbose: configuration.get('test', 'database', 'verbose')
	});
}

function stop() {
	if (database) {
		database.end();
	}
}

function get() {
	return database;
}

module.exports = {
	configuration: configuration,
	start: start,
	stop: stop,
	database: get
};