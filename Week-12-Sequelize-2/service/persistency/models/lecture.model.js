export default (sequelize, Sequelize) => {
  const Lecture = sequelize.define('umut-lectures', {
    name: {
      type: Sequelize.STRING
    }
  })

  return Lecture
}
