const axios = require('axios');
const { XBL3TOKEN, REALMID } = require('./config.json')

function parseBackups(backups){
    let backupData = []
	for (let ea of backups.backups){
		let _data = {id: "", time: 0, timestamp: ""};
		_data.time = ea.lastModifiedDate/1000;
		_data.id = ea.backupId;
		_data.timestamp = `<t:${_data.time}:R>`;
		backupData.push(_data)
    }
	return backupData
}

function getBackups(){
	let config = {
	  method: 'get',
	  maxBodyLength: Infinity,
	  url: `https://pocket.realms.minecraft.net/worlds/${REALMID}/backups`,
	  headers: { 
		'Cache-Control': 'no-cache', 
		'Charset': 'utf-8', 
		'Client-Version': '1.19.83', 
		'User-Agent': 'MCPE/UWP', 
		'Accept-Language': 'en-US', 
		'Accept-Encoding': 'gzip, deflate, br', 
		'Host': 'pocket.realms.minecraft.net', 
		'Authorization': XBL3TOKEN // Your (Realm Owner) XBL 3.0 Auth Token
	  }
	};

	axios.request(config).then((response) => {
		console.log(JSON.stringify(parseBackups(response.data)))
	}).catch((error) => { console.error(error) });
}

async function getBackupsAsync(){
	let config = {
	  method: 'get',
	  maxBodyLength: Infinity,
	  url: `https://pocket.realms.minecraft.net/worlds/${REALMID}/backups`,
	  headers: { 
		'Cache-Control': 'no-cache', 
		'Charset': 'utf-8', 
		'Client-Version': '1.19.83', 
		'User-Agent': 'MCPE/UWP', 
		'Accept-Language': 'en-US', 
		'Accept-Encoding': 'gzip, deflate, br', 
		'Host': 'pocket.realms.minecraft.net', 
		'Authorization': XBL3TOKEN // Your (Realm Owner) XBL 3.0 Auth Token
	  }
	};

	try {
		const response = await axios.request(config);
		return parseBackups(response.data);
	} catch (error) {
		console.error(error);
	}
}

module.exports = {getBackups, parseBackups, getBackupsAsync}

