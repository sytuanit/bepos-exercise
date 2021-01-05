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
        return queryInterface.bulkInsert('categories', [{
                name: 'Red Category',
                value: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Green Category',
                value: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Blue Category',
                value: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Yellow Category',
                value: 4,
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
        return queryInterface.bulkDelete('categories', null, {});
    }
};