import Student from "../models/studentModel.js";
import asyncHandle from 'express-async-handler';

export const getAllStudents = asyncHandle(async (req, res) => {
  try {
    console.log("Fetching all students...");
    const students = await Student.find();
    console.log("Fetched all students:", students);
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching all students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a new student
export const postStudent = asyncHandle(async (req, res) => {
  try {
    console.log("Creating a new student...");
    const { id, name, address, mobile } = req.body;

    if (!id || !name || !address || !mobile) {
      console.log("Validation failed: All fields are mandatory");
      res.status(400).json({ error: "All fields are mandatory" });
    } else {
      const student = await Student.create({
        id,
        name,
        address,
        mobile,
      });
      console.log("Created new student:", student);
      res.status(200).json(student);
    }
  } catch (error) {
    console.error("Error creating a new student:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update a student by ID
export const updateStudent = asyncHandle(async (req, res) => {
  try {
    console.log("Updating a student...");
    const studById = await Student.findById(req.params.id);

    if (!studById) {
      console.log("Student not found");
      res.status(404).json({ error: "Student not found" });
    } else {
      const updatedStudent = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      console.log("Updated student:", updatedStudent);
      res.status(200).json(updatedStudent);
    }
  } catch (error) {
    console.error("Error updating a student:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a student by ID
export const getStudentById = asyncHandle(async (req, res) => {
    try {
      console.log("Fetching student by custom id...");
      const { id } = req.params;
      const studById = await Student.findOne({ id });
      if (!studById) {
        console.log("Student not found by custom id");
        res.status(404).json({ error: "Student not found" });
      } else {
        console.log("Fetched student by custom id:", studById);
        res.status(200).json(studById);
      }
    } catch (error) {
      console.error("Error fetching student by custom id:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

// Delete a student by ID
export const deleteStudent = asyncHandle(async (req, res) => {
  try {
    console.log("Deleting a student...");
    const deletedStudent = await Student.findByIdAndRemove(req.params.id);

    if (!deletedStudent) {
      console.log("Student not found");
      res.status(404).json({ error: "Student not found" });
    } else {
      console.log("Deleted student:", deletedStudent);
      res.status(200).json({ message: "Student deleted successfully" });
    }
  } catch (error) {
    console.error("Error deleting a student:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Search for students by name
export const searchStudentsByName = asyncHandle(async (req, res) => {
  try {
    console.log("Searching students by name...");
    const { name } = req.params;

    if (!name) {
      console.log("Validation failed: Name parameter is required");
      res.status(400).json({ error: "Name parameter is required" });
    } else {
      const students = await Student.find({ name });
      console.log("Found students by name:", students);
      res.status(200).json(students);
    }
  } catch (error) {
    console.error("Error searching students by name:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Search for students by mobile number
export const searchStudentsByMobile = asyncHandle(async (req, res) => {
    try {
      console.log("Searching students by mobile number...");
      const { mobile } = req.params; // Use req.params to access the mobile parameter
  
      if (!mobile) {
        console.log("Validation failed: Mobile parameter is required");
        res.status(400).json({ error: "Mobile parameter is required" });
      } else {
        const students = await Student.find({ mobile });
        console.log("Found students by mobile number:", students);
        res.status(200).json(students);
      }
    } catch (error) {
      console.error("Error searching students by mobile number:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Update a student by ID
export const updateStudentById = asyncHandle(async (req, res) => {
    try {
      console.log("Updating a student by ID...");
      const studById = await Student.findById(req.params.id);
  
      if (!studById) {
        console.log("Student not found");
        res.status(404).json({ error: "Student not found" });
      } else {
        const updatedStudent = await Student.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        console.log("Updated student by ID:", updatedStudent);
        res.status(200).json(updatedStudent);
      }
    } catch (error) {
      console.error("Error updating a student by ID:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

// Update a student by name
export const updateStudentByName = asyncHandle(async (req, res) => {
try {
    console.log("Updating a student by name...");
    const { name } = req.params;

    if (!name) {
    console.log("Validation failed: Name parameter is required");
    res.status(400).json({ error: "Name parameter is required" });
    } else {
    const updatedStudent = await Student.findOneAndUpdate(
        { name },
        req.body,
        { new: true }
    );
    console.log("Updated student by name:", updatedStudent);
    res.status(200).json(updatedStudent);
    }
} catch (error) {
    console.error("Error updating a student by name:", error);
    res.status(500).json({ error: "Internal Server Error" });
}
});

// Update a student by mobile number
export const updateStudentByMobile = asyncHandle(async (req, res) => {
try {
    console.log("Updating a student by mobile number...");
    const { mobile } = req.params;

    if (!mobile) {
    console.log("Validation failed: Mobile parameter is required");
    res.status(400).json({ error: "Mobile parameter is required" });
    } else {
    const updatedStudent = await Student.findOneAndUpdate(
        { mobile },
        req.body,
        { new: true }
    );
    console.log("Updated student by mobile number:", updatedStudent);
    res.status(200).json(updatedStudent);
    }
} catch (error) {
    console.error("Error updating a student by mobile number:", error);
    res.status(500).json({ error: "Internal Server Error" });
}
});

// Get a student by MongoDB _id
export const getStudentByMongoId = asyncHandle(async (req, res) => {
    try {
      console.log("Fetching student by MongoDB _id...");
      const { _id } = req.params;
      const studByMongoId = await Student.findById(_id);
      if (!studByMongoId) {
        console.log("Student not found by MongoDB _id");
        res.status(404).json({ error: "Student not found" });
      } else {
        console.log("Fetched student by MongoDB _id:", studByMongoId);
        res.status(200).json(studByMongoId);
      }
    } catch (error) {
      console.error("Error fetching student by MongoDB _id:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Update a student by MongoDB _id
  export const updateStudentByMongoId = asyncHandle(async (req, res) => {
    try {
      console.log("Updating a student by MongoDB _id...");
      const updatedStudent = await Student.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
  
      if (!updatedStudent) {
        console.log("Student not found by MongoDB _id");
        res.status(404).json({ error: "Student not found" });
      } else {
        console.log("Updated student by MongoDB _id:", updatedStudent);
        res.status(200).json(updatedStudent);
      }
    } catch (error) {
      console.error("Error updating a student by MongoDB _id:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });