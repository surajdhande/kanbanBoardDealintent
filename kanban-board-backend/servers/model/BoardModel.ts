const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const mongoDB = "mongo --port 46018 -u 'suraj.dhande' --authenticationDatabase 'admin' -p 'cdsdwthgfgdei'";
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}


const boardSchema = new mongoose.Schema({
  name: String,
  description: String,
  columns: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Column' }],
});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
