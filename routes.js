const express = require('express');
const router = express.Router();

// POST method endpoint
router.post('/bfhl', async (req, res) => {
  try {
    const {
      userId,
      collegeEmailId,
      collegeRollNumber,
      data,
    } = req.body;

    const numbers=[]
    const alphabets=[]

    for (const item of data) {
        if (!isNaN(item)) {
          numbers.push(Number(item));
        } else if (typeof item === 'string') {
          alphabets.push(item);
        }
      }
    const highestAlphabet = alphabets.reduce((max, current) => {
      return current > max ? current : max;
    }, 'A'); 

console.log({
    status: 'Success',
    userId,
    collegeEmailId,
    collegeRollNumber,
    numbers,
    alphabets,
    highestAlphabet,
  })
    res.json({
      status: 'Success',
      userId,
      collegeEmailId,
      collegeRollNumber,
      numbers,
      alphabets,
      highestAlphabet,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'Error', message: 'Internal Server Error' });
  }
});

// GET method endpoint
router.get('/bfhl', (req, res) => {
  const operationCode = '1'; 
  res.json({ operationCode });
});

module.exports = router;