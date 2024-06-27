"use strict";

const { Membership } = require("../models");
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const membershipData = [
  { userId: 1, groupId: 1, status: "co-host" },
  { userId: 1, groupId: 3, status: "co-host" },
  { userId: 1, groupId: 4, status: "pending" },
  { userId: 1, groupId: 1, status: "member" },
  { userId: 2, groupId: 6, status: "co-host" },
  { userId: 2, groupId: 6, status: "member" },
  { userId: 3, groupId: 2, status: "member" },
  { userId: 3, groupId: 3, status: "member" },
  { userId: 4, groupId: 3, status: "member" },
  { userId: 4, groupId: 1, status: "pending" },
  { userId: 5, groupId: 1, status: "member" },
  { userId: 5, groupId: 3, status: "member" },
  { userId: 6, groupId: 3, status: "member" },
  { userId: 7, groupId: 4, status: "member" },
  { userId: 8, groupId: 1, status: "member" },
  { userId: 9, groupId: 2, status: "co-host" },
  { userId: 10, groupId: 6, status: "member" },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await Membership.bulkCreate(membershipData, { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Memberships";
    return queryInterface.bulkDelete(options, membershipData, {});
  },
};
