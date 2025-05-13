const mongoose = require('mongoose');
const mongoDB = mongoose.connect("mongodb://127.0.0.1:27017/serverside", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected!"))
.catch(err => console.log(err));

module.exports = {
    mongoDB
}

