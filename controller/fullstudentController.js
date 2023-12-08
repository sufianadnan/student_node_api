// Import the fullstudent model
import fullstudent from "../models/fullstudentModel.js";
import asyncHandle from 'express-async-handler';

// Create a new full student
export const createFullStudent = async (req, res) => {
  try {
    const {
      id,
      name,
      address,
      city,
      country,
      province,
      postal,
      email,
      mobile,
    } = req.body;

    // Create a new full student document
    const newFullStudent = new fullstudent({
      id,
      name,
      address,
      city,
      country,
      province,
      postal,
      email,
      mobile,
    });

    // Save the new full student to the database
    const savedFullStudent = await newFullStudent.save();

    res.status(201).json(savedFullStudent);
  } catch (error) {
    console.error("Error creating full student:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Retrieve all full students
export const getAllFullStudents = async (req, res) => {
  try {
    const fullStudents = await fullstudent.find();
    res.status(200).json(fullStudents);
  } catch (error) {
    console.error("Error fetching all full students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Retrieve a full student by ID
export const getFullStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const fullStudent = await fullstudent.findOne({ id });

    if (!fullStudent) {
      res.status(404).json({ error: "Full student not found" });
    } else {
      res.status(200).json(fullStudent);
    }
  } catch (error) {
    console.error("Error fetching full student by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a full student by ID
export const updateFullStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFullStudent = await fullstudent.findOneAndUpdate(
      { id },
      req.body,
      { new: true }
    );

    if (!updatedFullStudent) {
      res.status(404).json({ error: "Full student not found" });
    } else {
      res.status(200).json(updatedFullStudent);
    }
  } catch (error) {
    console.error("Error updating full student by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a full student by ID
export const deleteFullStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFullStudent = await fullstudent.findOneAndRemove({ id });

    if (!deletedFullStudent) {
      res.status(404).json({ error: "Full student not found" });
    } else {
      res.status(200).json({ message: "Full student deleted successfully" });
    }
  } catch (error) {
    console.error("Error deleting full student by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
