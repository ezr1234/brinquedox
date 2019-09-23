const mongoose = require('mongoose')

const url = 'mongodb+srv://lockyt:lockytroot@cluster0-auved.gcp.mongodb.net/brinquedox?retryWrites=true&w=majority'

try {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true});
} catch (error) {
  handleError(error);
}

module.exports = mongoose;