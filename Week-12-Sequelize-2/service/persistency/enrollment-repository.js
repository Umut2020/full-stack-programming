import db from "./sequelize-setup.js"

export async function getAll(){
    return await db.enrollments.findAll();
  }

export async function create(pEnrollment){
    return await db.enrollments.create(pEnrollment);
}

export async function findById(pId){
  return await db.enrollments.findByPk(pId);
}

export async function remove(pId){
  return await db.enrollments.destroy({
    where: { id: pId }
  })
}


/** Update

export async function update(pId, pUpdatedEnrollment){
  return await db.enrollments.update(pUpdatedEnrollment, {
    where: { id: pId }
  });
}

*/

