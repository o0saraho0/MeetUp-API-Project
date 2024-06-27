"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Membership.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Membership.belongsTo(models.Group, {
        foreignKey: "groupId",
      });
      // define association here
    }
  }
  Membership.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: { model: "Users" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      groupId: {
        type: DataTypes.INTEGER,
        references: { model: "Groups" },
        onDelete: "CASCADE",
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["co-host", "member", "pending"],
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Membership",
    }
  );
  return Membership;
};
