const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const Joi = require('joi');

const registerSchema = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

exports.register = async (req, res) => {

  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { username, email, password } = req.body;

 
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) return res.status(400).send('User already exists');


  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);


  try {
    const user = await User.create({ username, email, password: hashedPassword });

   
    const userDetails = {
      id: user.id,
      username: user.username,
      email: user.email,
      password :user.password
    };

    res.status(201).send({ user: userDetails });
  } catch (err) {
    res.status(400).send(err.message); 
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;


  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(400).send('Email not found');


  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(400).send('Invalid password');

  
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

 
  const userDetails = {
    id: user.id,
    username: user.username,
    email: user.email
  };

  
  res.status(200).json({
    token: token,
    user: userDetails
  });
};
