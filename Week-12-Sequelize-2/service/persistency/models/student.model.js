export default (sequelize, Sequelize) => {
  const Student = sequelize.define('umut-students', {
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    class: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    }
  })

  return Student
}
