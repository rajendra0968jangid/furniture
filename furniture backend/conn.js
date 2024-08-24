const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.URL);
mongoose.connection.on('connected', () => console.log('connected'));

const { Schema } = mongoose;
const contactSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    message: String
});
const Contact = mongoose.model('Contact', contactSchema);


module.exports = {Contact}




