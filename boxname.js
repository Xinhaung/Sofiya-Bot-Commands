const axios = require('axios');

module.exports = {
	config: {
		name: "boxname",
		aliases: ["bxn"],
		version: "1..1",
		author: "milan-says",
		countDown: 5,
		role: 1,
		shortDescription: "change the group chat name",
		longDescription: "",
		category: "admin",
		guide: "{pn}"
	},

	onStart: async function ({ api, event, args }) {
	var name = args.join(" ")
	if (!name) api.sendMessage("❌ You have not entered the group name you want to change", event.threadID, event.messageID)
	else api.setTitle(name, event.threadID, () => api.sendMessage(`🔨 The bot changed the Group name to: ${name}`, event.threadID, event.messageID));

	}
};
