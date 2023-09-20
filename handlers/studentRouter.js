const express = require('express');
const router = express.Router();
const Student = require('../model/student'); 


router.post('/students', async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/students/:id', async (req, res) => {
  try {
   
    const student = await Student.findOne({ id: req.params.id });
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/students/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findOneAndUpdate(
        { id: req.params.id }, 
        req.body,                   
        { new: true }                 
      );
    if (!updatedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/students/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findOneAndRemove({ id: req.params.id });

    if (!deletedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(deletedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
