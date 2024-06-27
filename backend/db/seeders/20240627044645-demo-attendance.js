"use strict";

const { Attendance } = require("../models");
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const attendanceData = [
  { eventId: 1, userId: 2, status: "attending" },
  { eventId: 1, userId: 3, status: "attending" },
  { eventId: 1, userId: 4, status: "waitlist" },
  { eventId: 2, userId: 1, status: "pending" },
  { eventId: 2, userId: 6, status: "attending" },
  { eventId: 3, userId: 7, status: "attending" },
  { eventId: 3, userId: 8, status: "attending" },
  { eventId: 3, userId: 9, status: "attending" },
  { eventId: 4, userId: 10, status: "attending" },
  { eventId: 4, userId: 1, status: "waitlist" },
  { eventId: 5, userId: 8, status: "attending" },
  { eventId: 6, userId: 7, status: "attending" },
  { eventId: 6, userId: 6, status: "attending" },
  { eventId: 6, userId: 5, status: "pending" },
  { eventId: 6, userId: 4, status: "waitlist" },
  { eventId: 6, userId: 2, status: "attending" },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await Attendance.bulkCreate(attendanceData, { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Attendances";
    return await queryInterface.bulkDelete(options, attendanceData, {});
  },
};

