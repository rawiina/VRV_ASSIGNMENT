const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');


const register = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const user = new User({ username, password, role });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: 'User not found' });

   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

 
    const payload = {
      "Issuer": "Issuer",  
      "Issued At": new Date().toISOString(),
      "Expiration": new Date(Date.now() + 3600000).toISOString(),  // 1 hour expiration
      "Username": user.username,
      "Role": user.role
    };

  
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
