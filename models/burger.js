'use strict';
module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('Burger', {
    // include data validation
    name: DataTypes.STRING,
    // {
    //   type: DataTypes.STRING
    //   validate: {
    //     notNull: true
    //   }
    // },
    devoured: DataTypes.BOOLEAN
  }, {});
  Burger.associate = function (models) {
    // associations can be defined here
  };
  return Burger;
};