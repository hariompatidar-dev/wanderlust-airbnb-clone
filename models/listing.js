const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
     filename: { type: String },
    url: {
      type: String,
      //   default:
      //     "defauhttps://unsplash.com/photos/tropical-background-of-isolated-palm-tree-with-warm-sunset-behind-3d-render-fgI7wgPzQuclt link",
      //   set: (v) =>
      //     v === ""
      //       ? "defauhttps://unsplash.com/photos/tropical-background-of-isolated-palm-tree-with-warm-sunset-behind-3d-render-fgI7wgPzQuclt link"
      //       : v,
      // required: [true, "Image URL is required"],
      // validate: {
      //   validator: function (v) {
      //     return /^https:\/\/.+/i.test(v);
      //   },
      //   message: (props) => `${props.value} is not a valid image URL`,
      // },
      default: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    },
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneandDelete", async (listing) => {
  if (listing) {
    Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
