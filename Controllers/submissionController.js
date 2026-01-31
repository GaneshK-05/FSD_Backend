import Submission from "../Models/Submission.js";
import Deadline from "../Models/Deadline.js";

export const submitEntry = async (req, res) => {
  const deadlineData = await Deadline.findOne();

  if (!deadlineData)
    return res.status(400).json({ message: "Deadline not set" });

  if (new Date() > deadlineData.deadline)
    return res.status(403).json({ message: "Deadline passed" });

  const submission = await Submission.create({
    user: req.user.id,
    content: req.body.content
  });

  res.status(201).json(submission);
};

export const mySubmissions = async (req, res) => {
  const submissions = await Submission.find({ user: req.user.id });
  res.json(submissions);
};
