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
        return queryInterface.bulkInsert('steps', [{
                taskId: 1,
                name: 'Read requirement',
                hasCompleted: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                taskId: 1,
                name: 'Coding',
                hasCompleted: false,
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
        return queryInterface.bulkDelete('steps', null, {});
    }
};