// const faker = require('faker');

const db = require("../config/connection");
const { Item, User } = require("../models");

db.once("open", async () => {
  await Item.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    // const username = faker.internet.userName();
    // const email = faker.internet.email(username);
    // const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create items
  let createdItems = [];
  for (let i = 0; i < 100; i += 1) {
    // const description = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdItem = await Item.create({ description, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { items: createdItem._id } }
    );

    createdItems.push(createdItem);
  }

  // create comments
  for (let i = 0; i < 100; i += 1) {
    // const commentText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomCommentIndex = Math.floor(
      Math.random() * createdComments.length
    );
    const { _id: commentId } = createdComments[randomCommentIndex];

    await Comment.updateOne(
      { _id: commentId },
      { $push: { comments: { commentText, username } } },
      { runValidators: true }
    );
  }

  console.log("all done!");
  process.exit(0);
});
