import * as teacherRepository from './persistency/teacher-repository.js'


export async function getAllTeachers(){
    return await teacherRepository.getAll();
}

export async function createTeacher(pTeacher){
    return await teacherRepository.create(pTeacher);
}


export async function deleteTeacher(pId){
    return await teacherRepository.remove(pId);
}

export async function getTeacherById(pId){
    let teacher = await teacherRepository.findById(pId)
    return teacher;
}


/** Update
 export async function updateTeacher(pId, pUpdateTeacher){
    let Teacher = await teacherRepository.updateTeacher(pId, pUpdateTeacher);
    return Teacher;
}
 */
