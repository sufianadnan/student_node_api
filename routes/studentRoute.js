import express from "express";
import {
    postStudent,
    getAllStudents,
    getStudentById,
    updateStudentById,
    updateStudentByName,
    updateStudentByMobile,
    deleteStudent,
    searchStudentsByName,
    searchStudentsByMobile,
    getStudentByMongoId,
    updateStudentByMongoId,
  } from "../controller/studentController.js";
  const studentRoute=express.Router();
// Create a new student
studentRoute.route("/").post(postStudent);

// Get all students
studentRoute.route("/").get(getAllStudents);

// Get a student by ID (using custom id)
studentRoute.route("/id/:id").get(getStudentById);

// Update a student by ID (using custom id)
studentRoute.route("/id/:id").put(updateStudentById);

// Get a student by MongoDB _id
studentRoute.route("/_id/:_id").get(getStudentByMongoId);

// Update a student by MongoDB _id
studentRoute.route("/_id/:_id").put(updateStudentByMongoId);

// Update a student by name
studentRoute.route("/name/:name").put(updateStudentByName);

// Update a student by mobile number
studentRoute.route("/mobile/:mobile").put(updateStudentByMobile);

// Delete a student by ID
studentRoute.route("/:id").delete(deleteStudent);

// Search for students by name
studentRoute.route("/search/name/:name").get(searchStudentsByName);

// Search for students by mobile number
studentRoute.route("/search/mobile/:mobile").get(searchStudentsByMobile);

export default studentRoute;