const axios = require('axios');
const fs = require("fs-extra");

module.exports = {
	config: {
		name: "imgur",
		aliases: ["imgur"],
		version: "1.0.3",
		author: "milan-says",
		countDown: 5,
		role: 1,
		shortDescription: "upload photos and get link",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} reply to image",
			en: "{pn} reply to a photo"
		}
	},

	onStart: async function ({ api,event,args, message }) {
const axios = require('axios');
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
    if(!linkanh) return api.sendMessage('Please reply to image.', event.threadID, event.messageID)
const res = await axios.get(`https://api.phamvandien.xyz/imgur?link=${encodeURIComponent(linkanh)}`);    
var juswa = res.data.uploaded.image;
    return api.sendMessage(`Here is your imgur link:\n\n${juswa}`, event.threadID, event.messageID);
 
}
};
