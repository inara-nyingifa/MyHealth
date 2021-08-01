const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});


router.get('/patient-dashboard', (req, res) => {
  res.render('patient-dashboard');
});

router.get('/provider-dashboard', (req, res) => {
  res.render('provider-dashboard');
});


router.get('/post', (req, res) => {
  res.render('post');
});

module.exports = router;