"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Events",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        venueId: {
          type: Sequelize.INTEGER,
          references: { model: "Venues" },
        },
        groupId: {
          type: Sequelize.INTEGER,
          references: { model: "Groups" },
        },
        name: {
          type: Sequelize.STRING,
        },
        description: {
          type: Sequelize.TEXT,
        },
        type: {
          type: Sequelize.ENUM,
          values: ["In Person", "Online"],
        },
        capacity: {
          type: Sequelize.INTEGER,
        },
        price: {
          type: Sequelize.INTEGER,
        },
        startDate: {
          type: Sequelize.DATE,
        },
        endDate: {
          type: Sequelize.DATE,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      options
    );
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "Events";
    return queryInterface.dropTable(options);
  },
};
