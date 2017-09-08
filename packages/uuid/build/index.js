"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.decode = decode;
exports.encode = encode;
function decode(encodedPath) {
	return new Buffer(encodedPath, "base64").toString("ascii").replace(/\/\//g, "/");
}

function encode(path) {
	return new Buffer(path).toString("base64");
}