'use strict'

let express = require('express');
let router = express.Router();
let knex = require('../knex');

router.get('/groups', function(req,res) {
  knex('groups')
    .orderBy('friends_id')
    .then((friends) => {
      res.render('groups');
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/groups/:friends_id', function(req, res) {
  knex('groups')
    .where('friends_id', req.params.id)
    .first()
    .then((groups) => {
      if (!groups) {
        return next();
      }
      res.send(groups);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/groups', function(req,res) {
  knex('groups')
    .insert({
      friends_id: req.body.friends_id,
      group_name: req.body.group_name
    }, '*')
    .then((groups) => {
      res.send(groups[0]);
    })
    .catch((err) => {
      next(err);
    });
  });

router.patch('/groups/:friends_id', function(req,res) {
  knex('groups')
    .where('friends_id', req.params.friends_id)
    .first()
    .then((groups) => {
      if (!groups) {
        return next();
      }
      return knex('groups')
      .update({
        friends_id: req.body.friends_id,
        group_name: req.body.group_name
      }, '*')
      .where('friends_id', req.params.friends_id);
    })
    .then((groups) => {
      res.send(groups[0]);
    })
    .catch((err) => {
      next(err);
    });
  });

  router.delete('/groups/:friends_id', (req, res, next) => {
   let group;
   knex('groups')
    .where('friends_id', req.params.friends_id)
    .first()
    .then((row) => {
      if (!row) {
        return next();
      }
      target = row;
      return knex('groups')
        .del()
        .where('friends_id', req.params.friends_id);
      })
      .then(() => {
        delete group.friends_id;
        res.send(group);
      })
      .catch((err) => {
        next(err);
      });
    });

module.exports = router;
