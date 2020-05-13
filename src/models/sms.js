const { Schema, model } = require('mongoose');

const newSchema = new Schema(
	{
		Body: {
			type: String,
			require: true,
		},
		Forms: {
			type: String,
		},
		To: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = model('sms', newSchema);
