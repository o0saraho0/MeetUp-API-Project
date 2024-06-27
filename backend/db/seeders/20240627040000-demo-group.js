"use strict";

const { Group } = require("../models");
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const groupData = [
  {
    organizerId: 1,
    name: "Kids' Celebrations",
    about:
      "A group dedicated to organizing fun and memorable birthday parties for kids of all ages.",
    type: "In Person",
    private: true,
    city: "San Francisco",
    state: "CA",
  },
  {
    organizerId: 2,
    name: "Little Stars Parties",
    about:
      "Specializing in themed birthday parties for children, ensuring every celebration is magical and unforgettable.",
    type: "In Person",
    private: true,
    city: "San Francisco",
    state: "CA",
  },
  {
    organizerId: 1,
    name: "Creative Kids",
    about:
      "A group for young artists to explore their creativity through various art projects and workshops.",
    type: "In Person",
    private: false,
    city: "Chicago",
    state: "IL",
  },
  {
    organizerId: 3,
    name: "Family Art Adventures",
    about:
      "Encouraging families to bond through art, offering workshops and activities that everyone can enjoy together.",
    type: "In Person",
    private: false,
    city: "Chicago",
    state: "IL",
  },
  {
    organizerId: 4,
    name: "Entrepreneurs United",
    about:
      "Bringing together aspiring and established entrepreneurs to share knowledge, ideas, and opportunities.",
    type: "In Person",
    private: false,
    city: "Los Angelas",
    state: "CA",
  },
  {
    organizerId: 1,
    name: "Tech Innovators",
    about:
      "A group for tech enthusiasts and startup founders to learn from industry leaders and network with peers.",
    type: "Online",
    private: false,
    city: "San Francisco",
    state: "CA",
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await Group.bulkCreate(groupData, { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Groups";
    return queryInterface.bulkDelete(options, {});
  },
};
