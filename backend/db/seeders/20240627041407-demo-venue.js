"use strict";

const { Venue } = require("../models");
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const venueData = [
  {
    groupId: 1,
    address: "456 Maple Street",
    city: "San Francisco",
    state: "CA",
    lat: 37.7749295,
    lng: -122.4194155,
  },
  {
    groupId: 2,
    address: "789 Elm Avenue",
    city: "Chicago",
    state: "IL",
    lat: 41.8781136,
    lng: -87.6297982,
  },
  {
    groupId: 3,
    address: "101 Pine Road",
    city: "Los Angeles",
    state: "CA",
    lat: 34.0522342,
    lng: -118.2436849,
  },
  {
    groupId: 4,
    address: "202 Oak Boulevard",
    city: "Houston",
    state: "TX",
    lat: 29.7604267,
    lng: -95.3698028,
  },
  {
    groupId: 1,
    address: "303 Cedar Lane",
    city: "Miami",
    state: "FL",
    lat: 25.7616798,
    lng: -80.1917902,
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await Venue.bulkCreate(venueData, { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Venues";
    return queryInterface.bulkDelete(options, venueData, {});
  },
};
