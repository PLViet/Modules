const fs = require("fs");
module.exports.config = {
name: "bot lon",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "bot lon",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bot lồn")==0 || (event.body.indexOf("Bot lồn")==0)) {
		var msg = {
				body: "Sủa qq gì thế mấy nhóc",
				attachment: fs.createReadStream(__dirname + `/noprefix/tenor.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}