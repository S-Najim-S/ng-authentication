const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://usernajim:<najim>@cluster0.8eguw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    await client.connect();
  } catch (err) {
    console.log("Error:", err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
