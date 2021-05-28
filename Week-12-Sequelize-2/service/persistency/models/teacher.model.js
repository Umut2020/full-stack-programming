export default (sequelize, Sequelize) => {
  const Teacher = sequelize.define('umut-teachers', {
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    }
  })

  return Teacher
}
