const routes = module.exports = require('next-routes')()

routes
	.add('computer.edit', '/edit/:computer_id', 'edit');