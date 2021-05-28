import * as studentRepository from './persistency/student-repository.js'


export async function getAllStudents(){
    return await studentRepository.getAll();
}

export async function createStudent(pStudent){
    return await studentRepository.create(pStudent);
}


export async function deleteStudent(pId){
    return await studentRepository.remove(pId);
}

export async function getStudentById(pId){
    let student = await studentRepository.findById(pId)
    return student;
}


/** Update
 export async function updatestudent(pId, pUpdatestudent){
    let student = await studentRepository.updatestudent(pId, pUpdatestudent);
    return student;
}
 */

