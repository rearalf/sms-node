const mongoose = require('mongoose');

mongoose
	.connect(
		'mongodb+srv://proyecto:12345@cluster0-bvssa.mongodb.net/test?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(db => console.log('DB is connected'))
	.catch(err => console.log(err));
