const path 					= require("path");
const ejs 					= require('ejs');
const url 					= require('url');
const os						= require('os');
const fs						= require('fs');
const async					= require('async');
const crypto				= require('crypto');
const iconv = require("iconv-lite");
const func				= require("./../custom_module/func.js");
const db_ 					= require("./../custom_module/db_query.js");
const request = require('request');
var exec = require('child_process').exec, child;


function send(res, code, data) {
	if (!data) data = {};
	res.statusCode = code;
	res.send(data);
}

module.exports.active_process = function(req, res){
	const {url} = req.body;
	console.log(url)
	console.log(__dirname);
	const link = `https://www.youtube.com/watch?v=${url}`;
	child = exec(`java -jar /tagging_jar/youtube/Tagging.jar ${link} /tagging_jar/public/youtube/blank`,
	function (error, stdout, stderr){
		console.log(error);
		console.log('end');
	});

	
};
