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
    images: [
      {
        public_id: {
          type: String,
          default:"public_id"
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
      default: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Book", bookSchema);
