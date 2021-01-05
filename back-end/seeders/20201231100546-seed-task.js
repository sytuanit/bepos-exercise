'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        return queryInterface.bulkInsert('tasks', [{
                userId: 1,
                name: 'Do POS exercise',
                hasCompleted: false,
                remindDate: new Date(),
                expireDate: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 1,
                name: 'Commit POS exercise',
                hasCompleted: false,
                remindDate: new Date(),
                expireDate: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 1,
                name: 'Push POS exercise',
                hasCompleted: false,
                remindDate: new Date(),
                expireDate: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('tasks', null, {});
    }
};