'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Task extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Task.belongsToMany(models.category, { through: models.taskCategory });
            Task.belongsTo(models.user);
            Task.hasMany(models.step);
        }
    };
    Task.init({
        userId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        hasCompleted: DataTypes.BOOLEAN,
        remindDate: DataTypes.DATE,
        expireDate: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'task'
    });
    return Task;
};