export default (sequelize, Sequelize) => {
  const Student = sequelize.define('students-by-Umut', {
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
