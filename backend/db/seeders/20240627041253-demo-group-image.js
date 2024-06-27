"use strict";

const { GroupImage } = require("../models");
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const groupImageData = [
  { groupId: 1, url: "images/group1.jpeg", preview: true },
  { groupId: 2, url: "images/group2.jpeg", preview: false },
  { groupId: 3, url: "images/group3.jpeg", preview: true },
  { groupId: 4, url: "images/group4.jpeg", preview: true },
  { groupId: 5, url: "images/group5.jpeg", preview: false },
  { groupId: 6, url: "images/group6.jpeg", preview: true },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await GroupImage.bulkCreate(groupImageData, { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "GroupImages";
    return queryInterface.bulkDelete(options, {});
  },
};
