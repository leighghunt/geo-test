'use strict';

var _ = require('lodash');
var Geothing = require('./geothing.model');

// Get list of geothings
exports.index = function(req, res) {
  Geothing.find(function (err, geothings) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(geothings);
  });
};

// Get a single geothing
exports.show = function(req, res) {
  Geothing.findById(req.params.id, function (err, geothing) {
    if(err) { return handleError(res, err); }
    if(!geothing) { return res.status(404).send('Not Found'); }
    return res.json(geothing);
  });
};

// Creates a new geothing in the DB.
exports.create = function(req, res) {
  Geothing.create(req.body, function(err, geothing) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(geothing);
  });
};

// Updates an existing geothing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Geothing.findById(req.params.id, function (err, geothing) {
    if (err) { return handleError(res, err); }
    if(!geothing) { return res.status(404).send('Not Found'); }
    var updated = _.merge(geothing, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(geothing);
    });
  });
};

// Deletes a geothing from the DB.
exports.destroy = function(req, res) {
  Geothing.findById(req.params.id, function (err, geothing) {
    if(err) { return handleError(res, err); }
    if(!geothing) { return res.status(404).send('Not Found'); }
    geothing.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}