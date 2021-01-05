'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Step extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Step.belongsTo(models.task);
        }
    };
    Step.init({
        taskId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        hasCompleted: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'step'
    });
    return Step;
};