import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../model/user.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";

export const newUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: "abhi@gmail.com" });

  if (user) {
    return next(new ErrorHandler("User Already Exist", 400));
  }

  await User.create({
    name: "Abhishek",
    email: "abhi@gmail.com",
  });

  res.status(201).json({ message: "User Created Successfully" });
});
