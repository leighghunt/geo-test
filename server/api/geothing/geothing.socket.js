/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Geothing = require('./geothing.model');

exports.register = function(socket) {
  Geothing.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Geothing.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('geothing:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('geothing:remove', doc);
}