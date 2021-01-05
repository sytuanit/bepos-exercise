'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TaskCategory extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {}
    };
    TaskCategory.init({
        taskId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'taskCategory'
    });
    return TaskCategory;
};