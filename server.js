const express = require('express');
const next = require('next');
const routes = require('./routes/routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);


app.prepare().then(() => {
	const server = express();

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.use(handle).listen(port, error => {
		if (error) throw error;
		console.log(`> Ready on http://localhost:${port}`)
	});
});