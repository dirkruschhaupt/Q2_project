'use strict';

let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

//let config = require('../knexfile')[env];
//let knex = require('knex')(config);
//let express = require('express');
// let router = express.Router();
//let knex = require('../knex');

router.get('/add', (req, res) => {
  res.render('add', {title: 'Add Friend'}); //renders account ejs file
});

router.post('/add', (req, res, next) => {
    knex('friends')
    .insert({
        //left side is database columns, right side is 'names' in ejs file
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: reg.body.state,
        phone: req.body.phone,
        email: req.body.email,
        birthday: req.body.birthday,
        sex: req.body.sex,
        rank: req.body.rank,
        relation: req.body.relation,
        date: req.body.date,
        place: req.body.place,
        note: req.body.note,
        photo: req.body.photo
    }, '*')

    .then((friends) => {
        res.render('friends', {friends});
    })

    .catch((err) => {
        next(err);
    });
  });

module.exports = router;
