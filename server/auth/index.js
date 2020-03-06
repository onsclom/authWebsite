const express = require('express');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const db = require('../db/connection');
const users = db.get('users');

const router = express.Router();

users.createIndex('username', { unique: true });
router.use(cors());

const schema = Joi.object().keys({
  username: Joi.string().regex(/(^[a-zA-Z0-9_]+$)/).min(2).max(30).required(),
  password: Joi.string().trim().min(10).required()
});



// any route in here is pre-pended with /auth
router.get('/', (req, res) => {
  res.json({
    message:  '🔐'
  });
});

router.post('/signup', (req, res, next) => {
  const result = Joi.validate(req.body, schema);
  if (result.error === null) {
    users.findOne({
      username: req.body.username
    }).then(user => {
      // if user is undefined, username is not in the db, otherwise, duplicate user detected
      if (user) {
        // there is already a user in the db with this username...
        // respond with an error!
        const error = new Error('That username is taken. Please choose another one.');
        res.status(422);
        next(error);
      } else {
        // hash the password
        bcrypt.hash(req.body.password.trim(), 12).then(hashedPassword => {
          // insert the user with the hashed password
          const newUser = {
            username: req.body.username,
            password: hashedPassword
          };

          users.insert(newUser).then(insertedUser => {
            delete insertedUser.password;
            res.json(insertedUser);
          });
        });
      }
    });
  } else {
    res.status(422);
    next(result.error);
  }
});

module.exports = router;
