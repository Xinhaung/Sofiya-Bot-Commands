const axios = require('axios');

module.exports = {
	config: {
		name: "2fa",
		aliases: ["2fa"],
		version: "1.3",
		author: "milan-says",
		countDown: 5,
		role: 2,
		shortDescription: "get authentic code",
		longDescription: "",
		category: "admin",
		guide:{
			vi: "{pn} ",
			en: "{pn} "
		}
	},

	onStart: async function ({ api, event, args, Users }) {
  const authenticator = require('authenticator');
  var formattedToken = authenticator.generateToken(args.join(""));
   
  var { threadID, messageID } = event;
   return api.sendMessage('⏳ Getting the code 2 fa for you...', event.threadID, (err, info) => {
    setTimeout(() => {
  return api.sendMessage(formattedToken,threadID,messageID);
   }, 200);
  }, event.messageID);
	}
};
