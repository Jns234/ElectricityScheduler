const mongoose = require('mongoose')

const AgatarkSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true }
	},
	{ collection: 'agatarkid' }
)

const model = mongoose.model('AgatarkSchema', UserSchema)

module.exports = model
