const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://gibgabmail:5obWVoq3PIGUqktg@backtut.04wilrp.mongodb.net/",
    { useNewUrlParser: true })

module.exports = mongoose