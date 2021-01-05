'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Category.belongsToMany(models.task, { through: models.taskCategory });
        }
    };
    Category.init({
        name: DataTypes.STRING,
        value: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'category'
    });
    return Category;
};