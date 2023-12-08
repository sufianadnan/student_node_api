import express from "express";
import {
  createFullStudent,
  getAllFullStudents,
  getFullStudentById,
  updateFullStudentById,
  deleteFullStudentById,
} from "../controller/fullstudentController.js";

const fullStudentRoute = express.Router();

// Create a new full student
fullStudentRoute.route("/").post(createFullStudent);

// Get all full students
fullStudentRoute.route("/").get(getAllFullStudents);

// Get a full student by ID
fullStudentRoute.route("/:id").get(getFullStudentById);

// Update a full student by ID
fullStudentRoute.route("/:id").put(updateFullStudentById);

// Delete a full student by ID
fullStudentRoute.route("/:id").delete(deleteFullStudentById);

export default fullStudentRoute;
