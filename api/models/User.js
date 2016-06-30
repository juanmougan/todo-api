/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },

    user_code : { type: 'string' },

    todos: {
      collection: "todo",
      via: "user"
    },

    created_at : { type: 'timestamp' }
  }
};

