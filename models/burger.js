'use strict';
module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('Burger', {
    // include data validation
    name: {
      type: DataTypes.TEXT,
      validaite: {
        notNull: true
      }
    },
    devoured: DataTypes.BOOLEAN
  }, {});
  Burger.associate = function (models) {
    // associations can be defined here
  };
  return Burger;
};