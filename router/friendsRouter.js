'use strict'

let express = require('express');
let router = express.Router();
let knex = require('../knex');

router.get('/friends', function(req,res) {
  knex('friends')
    .orderBy('id')
    .then((friends) => {
      res.render('friends', {data: friends});
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/friends/:id', function(req, res) {
  knex('friends')
    .where('id', req.params.id)
    .first()
    .then((friends) => {
      if (!friends) {
        return next();
      }
      res.send(friends);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/friends', function(req,res) {
  knex('friends')
    .insert({
      name: req.body.name,
      address: req.body.address,
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
      res.send(friends[0]);
    })
    .catch((err) => {
      next(err);
    });
  });

router.patch('/friends/:id', function(req,res) {
  knex('friends')
    .where('id', req.params.id)
    .first()
    .then((friends) => {
      if (!friends) {
        return next();
      }
      return knex('friends')
      .update({
        name: req.body.name,
        address: req.body.address,
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
      .where('id', req.params.id);
    })
    .then((friends) => {
      res.send(friends[0]);
    })
    .catch((err) => {
      next(err);
    });
  });

  router.delete('/friends/:id', (req, res, next) => {
   let friend;
   knex('friends')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if (!row) {
        return next();
      }
      target = row;
      return knex('friends')
        .del()
        .where('id', req.params.id);
      })
      .then(() => {
        delete friend.id;
        res.send(friend);
      })
      .catch((err) => {
        next(err);
      });
    });

module.exports = router;
