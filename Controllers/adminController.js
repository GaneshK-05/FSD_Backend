import Deadline from "../Models/Deadline.js";
import Submission from "../Models/Submission.js";

export const setDeadline = async (req, res) => {
  await Deadline.deleteMany();

  const deadline = await Deadline.create({
    deadline: req.body.deadline
  });

  res.json(deadline);
};

export const getAllSubmissions = async (req, res) => {
  const submissions = await Submission.find()
    .populate("user", "name email");

  res.json(submissions);
};
