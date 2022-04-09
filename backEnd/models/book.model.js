const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Book name"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please Enter Book description"],
    },
    author: {
      type: String,
      required: [true, "Please Enter Author name"],
    },
    price: {
      type: Number,
      required: [true, "Please Enter Book pice"],
      maxlength: [6, "price not excced 6 charecter"],
    },
    rating: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Please Enter book category"],
    },
    stock: {
      type: Number,
      required: [true, "Please Enter book stock"],
      maxlength: [10, "stock cannot excced 4 charecter"],
      default: 1,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Book", bookSchema);
