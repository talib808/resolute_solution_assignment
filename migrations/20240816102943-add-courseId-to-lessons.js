module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Lessons', 'courseId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Courses',
        key: 'id',
      },
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Lessons', 'courseId');
  }
};
