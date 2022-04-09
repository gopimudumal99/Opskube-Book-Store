const Order = require("../models/order.model");
const Book = require("../models/Book.model");
const ErrorHander = require("../utils/errorHander");
const catchAsynError = require("../middleware/catchAsyncErrors");

// create new order
exports.newOrder = catchAsynError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    shipingPrice,
    PaymentInfo,
    itemsPrice,
    taxPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    shipingPrice,
    PaymentInfo,
    itemsPrice,
    taxPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });
    
    res.status(201).json({
        success:true,
        order
    })
});
