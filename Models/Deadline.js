import mongoose from "mongoose";

const deadlineSchema = new mongoose.Schema({
  deadline: {
    type: Date,
    required: true
  }
});

export default mongoose.model("Deadline", deadlineSchema);
