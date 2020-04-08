const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://maui:abc123def@cintaroja-t2sei.gcp.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database connected'))
  .catch(() => console.log('Error connecting to database...'));