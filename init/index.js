const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

initData.data.forEach((listing, i) => {
  if (
    typeof listing.image !== "object" ||
    !listing.image.url ||
    typeof listing.image.url !== "string"
  ) {
    console.log(`Bad image at index ${i}: ${listing.title}`, listing.image);
  }
});

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data, { runValidators: true });
  console.log("Data was initialized");
};

initDB();
