'use strict'

let express = require('express');
let router = express.Router();
let knex = require('../knex');

router.get('/groups', function(req,res) {
  knex('groups')
    .orderBy('id')
    .then((friends) => {
      res.render('groups', {data: groups});
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/groups/:id', function(req, res) {
  knex('groups')
    .where('id', req.params.id)
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
      id: req.body.id,
      group_name: req.body.group_name
    }, '*')
    .then((groups) => {
      res.send(groups[0]);
    })
    .catch((err) => {
      next(err);
    });
  });

router.patch('/groups/:id', function(req,res) {
  knex('groups')
    .where('id', req.params.id)
    .first()
    .then((groups) => {
      if (!groups) {
        return next();
      }
      return knex('groups')
      .update({
        id: req.body.id,
        group_name: req.body.group_name
      }, '*')
      .where('id', req.params.id);
    })
    .then((groups) => {
      res.send(groups[0]);
    })
    .catch((err) => {
      next(err);
    });
  });

  router.delete('/groups/:id', (req, res, next) => {
   let group;
   knex('groups')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if (!row) {
        return next();
      }
      target = row;
      return knex('groups')
        .del()
        .where('id', req.params.id);
      })
      .then(() => {
        delete group.id;
        res.send(group);
      })
      .catch((err) => {
        next(err);
      });
    });

module.exports = router;
