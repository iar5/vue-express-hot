const express = require('express');
const path = require('path');

const app = express();

app.get('/api/test', function (req, res) {
	res.send("test")
});


if (process.env.NODE_ENV === 'development') {
	const webpack = require('webpack');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	
	const webpackConfig = require("@vue/cli-service/webpack.config.js");
	webpackConfig.entry.app.unshift('webpack-hot-middleware/client');

	const compiler = webpack(webpackConfig);
	app.use(webpackDevMiddleware(compiler, {logLevel: 'silent'}));
	app.use(webpackHotMiddleware(compiler));

	app.get('*', function (req, res) {
		compiler.outputFileSystem.readFile(path.join(compiler.outputPath, 'index.html'), (err, result) => {
			if (err) return next(err)
			res.set('content-type', 'text/html')
			res.send(result)
			res.end()
		})
	});
} 
else {
	// text file compression (for higher google lighthouse score) https://stackoverflow.com/a/57708321/7764088
	const expressStaticGzip = require('express-static-gzip');
	app.use(expressStaticGzip(path.join(__dirname, '/../dist')))
	
	const history = require('connect-history-api-fallback');
	const staticFileMiddleware = express.static(path.join(__dirname + '/../dist'));
	app.use(staticFileMiddleware);
	app.use(history({
		disableDotRule: true,
		verbose: true
	}));
	app.use(staticFileMiddleware);
}


const server = app.listen(process.env.PORT || 8080, "0.0.0.0", function () {
	console.log("App now running on port",  server.address().port);
});
