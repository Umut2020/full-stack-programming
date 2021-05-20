import * as studentRepository from './persistency/student-repository.js'


export async function getAllStudents(){
    return await studentRepository.getAll();
}

export async function createStudent(pStudent){
    return await studentRepository.create(pStudent);
}

