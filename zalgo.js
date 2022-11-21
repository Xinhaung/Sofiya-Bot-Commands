const axios = require('axios');

module.exports = {
	config: {
		name: "zalgo",
		aliases: ["zalgo"],
		version: "1.1",
		author: "milan-says",
		countDown: 5,
		role: 0,
		shortDescription: "Converts your text to Zalgo",
		longDescription: "",
		category: "text",
		guide: {
			vi: "{pn} your text",
			en: "{pn} your text"
		}
	},

	onStart: async function ({ api, event, message, args }) {
  const Zalgo = require("to-zalgo");
  return api.sendMessage(Zalgo(args.join(" ")), event.threadID, event.messageID);
	}
};
