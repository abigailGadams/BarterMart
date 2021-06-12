const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const itemSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  comments: [commentSchema]
},
  {
    toJSON: {
      getters: true
    }
  }
);

itemSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

const Item = model('Item', itemSchema);

module.exports = Item;