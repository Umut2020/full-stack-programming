import db from "./sequelize-setup.js"

export async function getAll(){
    return await db.teachers.findAll();
  }

export async function create(pTeacher){
    return await db.teachers.create(pTeacher);
}

export async function findById(pId){
  return await db.teachers.findByPk(pId);
}

export async function remove(pId){
  return await db.teachers.destroy({
    where: { id: pId }
  })
}



/** Update

export async function update(pId, pUpdatedTeacher){
  return await db.teachers.update(pUpdatedTeacher, {
    where: { id: pId }
  });
}

*/