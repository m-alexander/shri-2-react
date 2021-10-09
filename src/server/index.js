import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import fs from "fs";
import App from "../App";

const PORT = process.env.PORT || 3000;
const server = express();

server.use(express.static("build"));

server.use("/", (req, res) => {
	const context = {};
	console.log(req.url);
	const html = renderToString(
		<StaticRouter location={req.url} context={context}>
			<App />
		</StaticRouter>
	);

	fs.readFile("build/index.html", "utf8", (err, data) => {
		if (err) {
			console.error("Something went wrong:", err);
			return res.status(500).send("Oops, better luck next time!");
		}
		return res.send(
			data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
		);
	});
});

server.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
