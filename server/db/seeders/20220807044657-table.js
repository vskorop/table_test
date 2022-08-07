module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tests', [
      {
        date: new Date(new Date() - Math.random() * (1e+12)),
        name: 'Ann',
        number: 1,
        distance: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: new Date(new Date() - Math.random() * (1e+12)),
        name: 'John',
        number: 2,
        distance: 900,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: new Date(new Date() - Math.random() * (1e+12)),
        name: 'Elizabeth',
        number: 2,
        distance: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: new Date(new Date() - Math.random() * (1e+12)),
        name: 'Ramsy',
        number: 3,
        distance: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: new Date(new Date() - Math.random() * (1e+12)),
        name: 'Gvidon',
        number: 4,
        distance: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: new Date(new Date() - Math.random() * (1e+12)),
        name: 'Alexa',
        number: 5,
        distance: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: new Date(new Date() - Math.random() * (1e+12)),
        name: 'Anzo',
        number: 6,
        distance: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: new Date(new Date() - Math.random() * (1e+12)),
        name: 'Ruby',
        number: 7,
        distance: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: new Date(new Date() - Math.random() * (1e+12)),
        name: 'Amster',
        number: 8,
        distance: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: new Date(new Date() - Math.random() * (1e+12)),
        name: 'Sergo',
        number: 9,
        distance: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tests', null, {});
  },
};
