import Sequelize from 'sequelize'
import dbConfig from '../../environment-config.json'
import StudentModel from './models/student.model.js'
import TeacherModel from './models/teacher.model.js'
import LectureModel from './models/lecture.model.js'
import EnrollmentModel from './models/enrollment.model.js'

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.students = StudentModel(sequelize, Sequelize)
db.teachers = TeacherModel(sequelize, Sequelize)
db.lectures = LectureModel(sequelize, Sequelize)
db.enrollments = EnrollmentModel(sequelize, Sequelize)

// create relationship
db.students.hasMany(db.lectures)
db.teachers.hasMany(db.lectures)

// use it to force to create the db from scratch 
// db.sync({ force: true })
db.sequelize.sync({ force: false }).then(() => {
  console.log('Drop and re-sync db.')
})

export default db
