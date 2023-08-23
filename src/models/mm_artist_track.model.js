const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
  const MM_Artist_Track = sequelize.define(
    "MM_Artist_Track",
    {
      feat: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: "MM_Artist_Track",
    }
  );

  return MM_Artist_Track;
};
