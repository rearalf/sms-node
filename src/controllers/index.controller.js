const { sendMessage } = require('../twilio/send.sms');
const SMS = require('../models/sms');

const indexController = async (req, res) => {
	const messages = await SMS.find().lean();
	res.render('index', { messages });
};

const postMessage = async (req, res) => {
	const { message, phone } = req.body;
	if (!message || !phone) return res.json('Missing message or phone');
	const result = await sendMessage(message, phone);
	await SMS.create({ Body: message, To: phone }).then(res => console.log(res)).catch(err => console.log(err));
	console.log(result.sid);
	res.redirect('/');
};

const reciveMessage = (req, res) => {
    
};

module.exports = {
	indexController,
	postMessage,
	reciveMessage,
};
