const mongoose = require('mongoose');
const mongoDB =mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() => console.log("MongoDB connected!"))
.catch(err => console.log(err));

module.exports = {
    mongoDB
}

