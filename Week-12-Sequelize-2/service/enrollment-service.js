import * as enrollmentRepository from './persistency/enrollment-repository.js'


export async function getAllEnrollments(){
    return await enrollmentRepository.getAll();
}

export async function createEnrollment(pEnrollment){
    return await enrollmentRepository.create(pEnrollment);
}


export async function deleteEnrollment(pId){
    return await enrollmentRepository.remove(pId);
}

export async function getEnrollmentById(pId){
    let enrollment = await enrollmentRepository.findById(pId)
    return enrollment;
}


/** Update
 export async function updatEenrollment(pId, pUpdateEnrollment){
    let enrollment = await enrollmentRepository.updatEenrollment(pId, pUpdateEnrollment);
    return enrollment;
}
 */
