const {default: mongoose} = require("mongoose");
const DB_URL = "mongodb://localhost:27017/mongoose-tutorial";
// mongoose.connect(DB_URL); 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(DB_URL);
  console.log("connected to mongo");
}