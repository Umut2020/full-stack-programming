export default (sequelize, Sequelize) => {
  const Enrollment = sequelize.define('umut-enrollments', {
    teacherId: {
      type: Sequelize.INTEGER
    },
    lectureId: {
      type: Sequelize.INTEGER
    },
    studentId: {
      type: Sequelize.INTEGER
    }

  })

  return Enrollment
}
