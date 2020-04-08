const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  genre: String,
  actors: [{
    type: String,
    required: true,
  }],
  description: {
    type: String,
    default: "Descripcion general...",
  },
});

const Movies = mongoose.model('Movies', movieSchema);

module.exports = Movies;