"use strict";

const { EventImage } = require("../models");
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const eventImageData = [
  { eventId: 1, url: "images/birthday1.jpeg", preview: true },
  { eventId: 2, url: "images/birthday2.jpeg", preview: false },
  { eventId: 3, url: "images/art1.jpeg", preview: true },
  { eventId: 4, url: "images/art2.jpeg", preview: true },
  { eventId: 5, url: "images/business1.jpeg", preview: false },
  { eventId: 6, url: "images/business2.jpeg", preview: true },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await EventImage.bulkCreate(eventImageData, { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "EventImages";
    return queryInterface.bulkDelete(options, eventImageData, {});
  },
};
