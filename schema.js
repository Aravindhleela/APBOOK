const playerSchema = new mongoose.Schema({
  name: String,
  runs: Number,
  isCaptain: Boolean
});
const Player = mongoose.model('Player', playerSchema);