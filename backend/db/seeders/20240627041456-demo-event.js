"use strict";

const { Event } = require("../models");
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const eventData = [
  {
    venueId: 1,
    groupId: 1,
    name: "Ryan's 5th Birthday Bash",
    description:
      "A fun-filled birthday party for Ryan with games, and lots of fun!",
    type: "In Person",
    capacity: 30,
    price: 15,
    startDate: "2024-11-19 11:00:00",
    endDate: "2024-11-19 14:00:00",
  },
  {
    venueId: 1,
    groupId: 2,
    name: "Sophia's Princess Party",
    description:
      "Join us for Sophia's 3th birthday party with a princess theme, including dress-up, games, and a royal feast!",
    type: "In Person",
    capacity: 25,
    price: 10,
    startDate: "2024-12-10 10:00:00",
    endDate: "2024-12-10 13:00:00",
  },
  {
    venueId: 2,
    groupId: 3,
    name: "Family Art Workshop",
    description:
      "A family-friendly workshop where parents and kids can create art together, led by professional artists.",
    type: "In Person",
    capacity: 15,
    price: 25,
    startDate: "2024-08-12 09:00:00",
    endDate: "2024-08-12 11:30:00",
  },
  {
    venueId: 2,
    groupId: 3,
    name: "Kids' Paint and Play",
    description:
      "A creative afternoon where kids can explore their artistic talents with guided painting sessions and fun activities.",
    type: "In Person",
    capacity: 20,
    price: 10,
    startDate: "2024-07-05 14:00:00",
    endDate: "2024-07-05 16:00:00",
  },
  {
    venueId: 3,
    groupId: 4,
    name: "Entrepreneurship Workshop",
    description:
      "A workshop designed to help budding entrepreneurs develop their business ideas and skills with expert guidance.",
    type: "In Person",
    capacity: 40,
    price: 50,
    startDate: "2024-10-15 09:00:00",
    endDate: "2024-10-15 12:00:00",
  },
  {
    venueId: null,
    groupId: 5,
    name: "Tech Startup Conference",
    description:
      "A conference for tech startup enthusiasts to learn from industry leaders, attend workshops, and network with peers.",
    type: "Online",
    capacity: 100,
    price: 30,
    startDate: "2024-11-20 10:00:00",
    endDate: "2024-11-20 17:00:00",
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await Event.bulkCreate(eventData, { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Events";
    return queryInterface.bulkDelete(options, eventData, {});
  },
};
