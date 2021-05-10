import rentsDataBase from '../dataBase/rentsDataBase.js'


export function getAllRents () {
    return rentsDataBase
  }

export function createMovieRent(movieId, rentInfo){
    rentsDataBase.push({
        movieId: movieId,
        ...rentInfo
    })
}