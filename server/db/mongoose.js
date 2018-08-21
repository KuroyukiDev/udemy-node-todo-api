var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<KuroyukiDev>:<Artix0100.>@ds127362.mlab.com:27362/todoapi', {useNewUrlParser: true});

module.exports = {mongoose: mongoose};
