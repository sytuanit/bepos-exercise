'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User.hasMany(models.task);
        }
    };
    User.init({
        name: DataTypes.STRING,
        email: DataTypes.TEXT,
        password: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'user'
    });
    return User;
};